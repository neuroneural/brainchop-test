// WeakMap keeps component metadata off the Uint32Array instance so assert.deepStrictEqual on `ls` stays identical.
const labelMetaMap = new WeakMap()

export class BWLabeler {
  /** Return cached metadata associated with a conn=6 component-label map `ls`, if any. */
  getLabelMeta(ls) {
    return labelMetaMap.get(ls) || null
  }

  // port of https://github.com/rordenlab/niimath/blob/master/src/bwlabel.c
  // return voxel address given row A, column B, and slice C
  idx(A, B, C, DIM) {
    return C * DIM[0] * DIM[1] + B * DIM[0] + A
  } // idx()

  // determine if voxels below candidate voxel have already been assigned a label
  check_previous_slice(bw, il, r, c, sl, dim, conn, tt, nabo, tn) {
    let nr_set = 0
    if (!sl) {
      return 0
    }
    const val = bw[this.idx(r, c, sl, dim)]
    if (conn >= 6) {
      const idx = this.idx(r, c, sl - 1, dim)
      if (val === bw[idx]) {
        nabo[nr_set++] = il[idx]
      }
    }
    if (conn >= 18) {
      if (r) {
        const idx = this.idx(r - 1, c, sl - 1, dim)
        if (val === bw[idx]) {
          nabo[nr_set++] = il[idx]
        }
      }
      if (c) {
        const idx = this.idx(r, c - 1, sl - 1, dim)
        if (val === bw[idx]) {
          nabo[nr_set++] = il[idx]
        }
      }
      if (r < dim[0] - 1) {
        const idx = this.idx(r + 1, c, sl - 1, dim)
        if (val === bw[idx]) {
          nabo[nr_set++] = il[idx]
        }
      }
      if (c < dim[1] - 1) {
        const idx = this.idx(r, c + 1, sl - 1, dim)
        if (val === bw[idx]) {
          nabo[nr_set++] = il[idx]
        }
      }
    }
    if (conn === 26) {
      if (r && c) {
        const idx = this.idx(r - 1, c - 1, sl - 1, dim)
        if (val === bw[idx]) {
          nabo[nr_set++] = il[idx]
        }
      }
      if (r < dim[0] - 1 && c) {
        const idx = this.idx(r + 1, c - 1, sl - 1, dim)
        if (val === bw[idx]) {
          nabo[nr_set++] = il[idx]
        }
      }
      if (r && c < dim[1] - 1) {
        const idx = this.idx(r - 1, c + 1, sl - 1, dim)
        if (val === bw[idx]) {
          nabo[nr_set++] = il[idx]
        }
      }
      if (r < dim[0] - 1 && c < dim[1] - 1) {
        const idx = this.idx(r + 1, c + 1, sl - 1, dim)
        if (val === bw[idx]) {
          nabo[nr_set++] = il[idx]
        }
      }
    }
    if (nr_set) {
      this.fill_tratab(tt, nabo, nr_set, tn)
      return nabo[0]
    } else {
      return 0
    }
  } // check_previous_slice()

  // provisionally label all voxels in volume
  do_initial_labelling(bw, dim, conn, scratch = null) {
    const nx = dim[0] | 0
    const ny = dim[1] | 0
    const nz = dim[2] | 0
    const plane = nx * ny
    const nvox = plane * nz
    let label = 1
    const kGrowArrayBy = 8192
    let ttn = kGrowArrayBy
    let tt = new Uint32Array(ttn)
    let il
    if (conn === 6 && scratch && scratch.il && scratch.il.length === nvox) {
      il = scratch.il
      if (scratch.dirty) {
        il.fill(0)
      } else if (scratch.runs && scratch.runLen > 0) {
        const prevRuns = scratch.runs
        const prevLen = scratch.runLen
        for (let k = 0; k < prevLen; k += 2) {
          il.fill(0, prevRuns[k], prevRuns[k + 1])
        }
      }
    } else {
      il = new Uint32Array(nvox)
      if (conn === 6 && scratch) {
        scratch.il = il
        scratch.runs = null
        scratch.runLen = 0
        scratch.dirty = false
      }
    }

    if (conn === 6) {
      if (scratch) scratch.dirty = true
      const u32 =
        (bw instanceof Uint8Array || bw instanceof Uint8ClampedArray) &&
        (bw.byteOffset & 3) === 0 &&
        (nx & 3) === 0 &&
        bw.length >= nvox
          ? new Uint32Array(bw.buffer, bw.byteOffset, nvox >> 2)
          : null
      let runs = scratch && scratch.runs ? scratch.runs : new Uint32Array(8192)
      let runsCap = runs.length
      let runLen = 0
      let n0 = 0
      let n1 = 0
      let n2 = 0
      let fgStart = -1
      let fgEnd = -1
      let minSl = nz
      let maxSl = -1
      for (let sl = 0; sl < nz; sl++) {
        const slOff = sl * plane
        for (let c = 0; c < ny; c++) {
          const rowOff = slOff + c * nx
          let r = 0
          if (u32) {
            const qRowEnd = (rowOff + nx) >> 2
            let q = rowOff >> 2
            while (q < qRowEnd && u32[q] === 0) q++
            if (q === qRowEnd) continue
            r = (q << 2) - rowOff
          }
          let inRun = false
          for (; r < nx; r++) {
            const i = rowOff + r
            if (u32 && !inRun && (r & 3) === 0 && u32[i >> 2] === 0) {
              r += 3
              continue
            }
            const val = bw[i]
            if (val === 0) {
              if (inRun) {
                runs[runLen++] = i
                inRun = false
              }
              continue
            }
            if (!inRun) {
              if (runLen + 2 > runsCap) {
                runsCap <<= 1
                const ext = new Uint32Array(runsCap)
                ext.set(runs)
                runs = ext
              }
              runs[runLen++] = i
              inRun = true
            }
            if (fgStart < 0) {
              fgStart = i
              minSl = sl
            }
            fgEnd = i
            maxSl = sl
            let nr_set = 0
            if (sl > 0 && bw[i - plane] === val) {
              n0 = il[i - plane]
              nr_set = 1
            }
            if (r > 0 && bw[i - 1] === val) {
              const lbl = il[i - 1]
              if (nr_set === 0) n0 = lbl
              else if (nr_set === 1) n1 = lbl
              else n2 = lbl
              nr_set++
            }
            if (c > 0 && bw[i - nx] === val) {
              const lbl = il[i - nx]
              if (nr_set === 0) n0 = lbl
              else if (nr_set === 1) n1 = lbl
              else n2 = lbl
              nr_set++
            }
            if (nr_set === 0) {
              il[i] = label
              if (label >= ttn) {
                ttn += kGrowArrayBy
                const ext = new Uint32Array(ttn)
                ext.set(tt)
                tt = ext
              }
              tt[label - 1] = label
              label++
            } else {
              il[i] = n0
              if (nr_set === 2 && n1 !== n0) {
                let r0 = n0
                while (tt[r0 - 1] !== r0) r0 = tt[r0 - 1]
                let r1 = n1
                while (tt[r1 - 1] !== r1) r1 = tt[r1 - 1]
                const ltn = r0 < r1 ? r0 : r1
                tt[r0 - 1] = ltn
                tt[r1 - 1] = ltn
              } else if (nr_set === 3 && (n1 !== n0 || n2 !== n0)) {
                let r0 = n0
                while (tt[r0 - 1] !== r0) r0 = tt[r0 - 1]
                let r1 = n1
                while (tt[r1 - 1] !== r1) r1 = tt[r1 - 1]
                let r2 = n2
                while (tt[r2 - 1] !== r2) r2 = tt[r2 - 1]
                let ltn = r0 < r1 ? r0 : r1
                if (r2 < ltn) ltn = r2
                tt[r0 - 1] = ltn
                tt[r1 - 1] = ltn
                tt[r2 - 1] = ltn
              }
            }
          }
          if (inRun) {
            runs[runLen++] = rowOff + nx
          }
        }
      }
      for (let i = 0; i < label - 1; i++) {
        let j = i
        while (tt[j] !== j + 1) {
          j = tt[j] - 1
        }
        tt[i] = j + 1
      }
      if (scratch) {
        scratch.runs = runs
        scratch.runLen = runLen
        scratch.dirty = false
      }
      this._lastInitialRange = { conn: 6, fgStart, fgEnd, minSl, maxSl, runs, runLen }
      return [label - 1, tt, il]
    }

    const naboPS = new Uint32Array(32)
    const tn = new Uint32Array(32)
    const nabo = new Uint32Array(27)
    for (let sl = 0; sl < nz; sl++) {
      for (let c = 0; c < ny; c++) {
        for (let r = 0; r < nx; r++) {
          let nr_set = 0
          const val = bw[this.idx(r, c, sl, dim)]
          if (val === 0) {
            continue
          }
          nabo[0] = this.check_previous_slice(bw, il, r, c, sl, dim, conn, tt, naboPS, tn)
          if (nabo[0]) {
            nr_set += 1
          }
          if (conn >= 6) {
            if (r) {
              const idx = this.idx(r - 1, c, sl, dim)
              if (val === bw[idx]) {
                nabo[nr_set++] = il[idx]
              }
            }
            if (c) {
              const idx = this.idx(r, c - 1, sl, dim)
              if (val === bw[idx]) {
                nabo[nr_set++] = il[idx]
              }
            }
          }
          if (conn >= 18) {
            if (c && r) {
              const idx = this.idx(r - 1, c - 1, sl, dim)
              if (val === bw[idx]) {
                nabo[nr_set++] = il[idx]
              }
            }
            if (c && r < nx - 1) {
              const idx = this.idx(r + 1, c - 1, sl, dim)
              if (val === bw[idx]) {
                nabo[nr_set++] = il[idx]
              }
            }
          }
          if (nr_set) {
            il[this.idx(r, c, sl, dim)] = nabo[0]
            this.fill_tratab(tt, nabo, nr_set, tn)
          } else {
            il[this.idx(r, c, sl, dim)] = label
            if (label >= ttn) {
              ttn += kGrowArrayBy
              const ext = new Uint32Array(ttn)
              ext.set(tt)
              tt = ext
            }
            tt[label - 1] = label
            label++
          }
        }
      }
    }
    for (let i = 0; i < label - 1; i++) {
      let j = i
      while (tt[j] !== j + 1) {
        j = tt[j] - 1
      }
      tt[i] = j + 1
    }
    this._lastInitialRange = null
    return [label - 1, tt, il]
  } // do_initial_labelling()

  // translation table unifies a region that has been assigned multiple classes
  fill_tratab(tt, nabo, nr_set, tn) {
    // let cntr = 0
    //tn.fill(0)
    const INT_MAX = 2147483647
    let ltn = INT_MAX
    for (let i = 0; i < nr_set; i++) {
      let j = nabo[i]
      // cntr = 0
      while (tt[j - 1] !== j) {
        j = tt[j - 1]
        /* cntr++
        if (cntr > 100) {
          console.log('\nOoh no!!')
          break
        } */
      }
      tn[i] = j
      ltn = Math.min(ltn, j)
    }
    for (let i = 0; i < nr_set; i++) {
      tt[tn[i] - 1] = ltn
    }
  } // fill_tratab()

  // remove any residual gaps so label numbers are dense rather than sparse (mutates `il` in-place)
  translate_labels(il, dim, tt, ttn, bw = null, range = null) {
    const nvox = dim[0] * dim[1] * dim[2]
    if (range && (ttn === 0 || range.fgStart < 0)) {
      if (bw) {
        this._lastMeta = {
          conn: range.conn,
          cl: 0,
          fgStart: 0,
          fgEnd: -1,
          minSl: 0,
          maxSl: -1,
          ls2bw: new Uint32Array(1),
          sumls: new Uint32Array(1),
          distinctFgClasses: 0,
          bw,
        }
      }
      return [0, il]
    }
    let ml = 0
    for (let i = 0; i < ttn; i++) {
      if (tt[i] > ml) ml = tt[i]
    }
    const fl = new Uint32Array(ml + 1)
    const ls2bwTmp = (bw && range) ? new Uint32Array(ttn + 1) : null
    const sumlsTmp = (bw && range) ? new Uint32Array(ttn + 1) : null
    const start = range ? range.fgStart : 0
    const end = range ? range.fgEnd : nvox - 1
    let cl = 0
    if (range && range.runs) {
      const runs = range.runs
      const runLen = range.runLen
      for (let rk = 0; rk < runLen; rk += 2) {
        const s = runs[rk]
        const e = runs[rk + 1]
        for (let i = s; i < e; i++) {
          const root = tt[il[i] - 1]
          let mapped = fl[root]
          if (!mapped) {
            cl += 1
            mapped = cl
            fl[root] = mapped
            if (ls2bwTmp) ls2bwTmp[mapped] = bw[i]
          }
          il[i] = mapped
          if (sumlsTmp) sumlsTmp[mapped]++
        }
      }
    } else {
      for (let i = start; i <= end; i++) {
        const lbl = il[i]
        if (lbl) {
          const root = tt[lbl - 1]
          let mapped = fl[root]
          if (!mapped) {
            cl += 1
            mapped = cl
            fl[root] = mapped
            if (ls2bwTmp) ls2bwTmp[mapped] = bw[i]
          }
          il[i] = mapped
          if (sumlsTmp) sumlsTmp[mapped]++
        }
      }
    }
    if (bw && range) {
      const ls2bw = ls2bwTmp.slice(0, cl + 1)
      const sumls = sumlsTmp.slice(0, cl + 1)
      let distinctFgClasses = 0
      if (cl > 0) {
        const firstCls = ls2bw[1]
        distinctFgClasses = 1
        for (let c = 2; c <= cl; c++) {
          if (ls2bw[c] !== firstCls) {
            distinctFgClasses = 2
            break
          }
        }
      }
      this._lastMeta = {
        conn: range.conn,
        cl,
        fgStart: range.fgStart,
        fgEnd: range.fgEnd,
        minSl: range.minSl,
        maxSl: range.maxSl,
        runs: range.runs,
        runLen: range.runLen,
        ls2bw,
        sumls,
        distinctFgClasses,
        bw,
      }
    }
    return [cl, il]
  } // translate_labels()

  /**
   * For each SUPPRESSED component, find the most common KEPT class touching its
   * 6-neighbourhood boundary. Used by the relabel-instead-of-zero option so a
   * dropped blob inherits its surrounding surviving label rather than becoming
   * background.
   *
   * A plain contact-majority vote is biased by SURFACE AREA, which is wrong for
   * sheet-like structures. A dropped cortical fragment rests on white matter
   * across its whole inner surface, meets neighbouring parcels only along a thin
   * tangential rim, and faces background/CSF (uncounted) on the pial side - so
   * white matter wins the vote and the fragment is repainted as WM, which is
   * anatomically impossible for tissue on the pial side of the WM boundary.
   * `familyOf` fixes this: the vote is first restricted to neighbours in the
   * component's OWN class family (for the DK atlas: same-hemisphere cortex), and
   * only falls back to the unrestricted vote when that family has no candidate -
   * which is exactly the case (a true speck buried inside white matter) where
   * the unrestricted answer is the right one.
   *
   * @param {Uint32Array} ls   Component-label map (0 = background).
   * @param {number[]} dim     [nx, ny, nz].
   * @param {Uint32Array} kept Per-label surviving class id (>0) or 0 if suppressed.
   * @param {number} cl        Number of components.
   * @param {Uint32Array} [bw] Original class volume; required for `familyOf`,
   *   since it is the only place a SUPPRESSED component's own class survives.
   * @param {(cls:number)=>number} [familyOf] Maps a class id to a family id, or 0
   *   for "no restriction". Supplied by the caller so this file stays agnostic of
   *   any model's label layout. Omit (null) for the original unrestricted vote.
   * @returns {Uint32Array}    winner[comp] = class to assign (0 = leave as bg).
   */
  neighbor_winners(ls, dim, kept, cl, bw = null, familyOf = null) {
    const nx = dim[0]
    const ny = dim[1]
    const nz = dim[2]
    const sliceXY = nx * ny
    // Per-suppressed-component family id (-1 = not yet seen, 0 = unrestricted).
    const useFamily = !!(familyOf && bw)
    let anySuppressed = false
    for (let c = 1; c <= cl; c++) {
      if (!kept[c]) {
        anySuppressed = true
        break
      }
    }
    if (!anySuppressed) {
      if (useFamily) {
        console.log(
          `[relabel] 0/0 suppressed components resolved within their own class family` +
            ` (0 fell back to the unrestricted neighbour vote)`
        )
      }
      return new Uint32Array(cl + 1)
    }
    const compFam = useFamily ? new Int32Array(cl + 1).fill(-1) : null
    // hist: compId -> Map(class -> contact count)
    const hist = new Map()
    const bump = (c, klass) => {
      let h = hist.get(c)
      if (!h) {
        h = new Map()
        hist.set(c, h)
      }
      h.set(klass, (h.get(klass) || 0) + 1)
    }
    const meta = labelMetaMap.get(ls)
    const hasMeta = meta && meta.cl === cl && ls.length === sliceXY * nz
    if (hasMeta && meta.runs) {
      const runs = meta.runs
      const runLen = meta.runLen
      for (let rk = 0; rk < runLen; rk += 2) {
        const s = runs[rk]
        const e = runs[rk + 1]
        const z = (s / sliceXY) | 0
        const rem = s - z * sliceXY
        const y = (rem / nx) | 0
        let x = rem - y * nx
        for (let i = s; i < e; i++, x++) {
          const c = ls[i]
          if (kept[c]) continue // only suppressed (non-bg, not-kept) voxels
          if (useFamily && compFam[c] < 0) {
            compFam[c] = familyOf(bw[i])
          }
          let k
          if (x > 0 && (k = kept[ls[i - 1]])) bump(c, k)
          if (x < nx - 1 && (k = kept[ls[i + 1]])) bump(c, k)
          if (y > 0 && (k = kept[ls[i - nx]])) bump(c, k)
          if (y < ny - 1 && (k = kept[ls[i + nx]])) bump(c, k)
          if (z > 0 && (k = kept[ls[i - sliceXY]])) bump(c, k)
          if (z < nz - 1 && (k = kept[ls[i + sliceXY]])) bump(c, k)
        }
      }
    } else {
      const zStart = hasMeta ? meta.minSl : 0
      const zEnd = hasMeta ? meta.maxSl : nz - 1
      let i = zStart * sliceXY
      for (let z = zStart; z <= zEnd; z++) {
        for (let y = 0; y < ny; y++) {
          for (let x = 0; x < nx; x++, i++) {
            const c = ls[i]
            if (c === 0 || kept[c]) {
              continue
            } // only suppressed (non-bg, not-kept) voxels
            if (useFamily && compFam[c] < 0) {
              compFam[c] = familyOf(bw[i])
            }
            let k
            if (x > 0 && (k = kept[ls[i - 1]])) bump(c, k)
            if (x < nx - 1 && (k = kept[ls[i + 1]])) bump(c, k)
            if (y > 0 && (k = kept[ls[i - nx]])) bump(c, k)
            if (y < ny - 1 && (k = kept[ls[i + nx]])) bump(c, k)
            if (z > 0 && (k = kept[ls[i - sliceXY]])) bump(c, k)
            if (z < nz - 1 && (k = kept[ls[i + sliceXY]])) bump(c, k)
          }
        }
      }
    }
    const winner = new Uint32Array(cl + 1).fill(0)
    let familyResolved = 0
    for (const [c, h] of hist) {
      const fam = useFamily ? compFam[c] : 0
      let best = 0
      let bestN = 0
      // Pass 1: restrict to the component's own family, when it has one.
      if (fam > 0) {
        for (const [klass, n] of h) {
          if (familyOf(klass) !== fam) {
            continue
          }
          // most contacts wins; ties broken by lower class id for determinism
          if (n > bestN || (n === bestN && (best === 0 || klass < best))) {
            bestN = n
            best = klass
          }
        }
        if (best) {
          familyResolved++
        }
      }
      // Pass 2 (fallback): no family, or the family had no neighbour present.
      // `best === 0` implies `bestN === 0`, so the tally starts clean.
      if (!best) {
        for (const [klass, n] of h) {
          if (n > bestN || (n === bestN && (best === 0 || klass < best))) {
            bestN = n
            best = klass
          }
        }
      }
      winner[c] = best
    }
    if (useFamily) {
      console.log(
        `[relabel] ${familyResolved}/${hist.size} suppressed components resolved within their own class family` +
          ` (${hist.size - familyResolved} fell back to the unrestricted neighbour vote)`
      )
    }
    return winner
  }

  /**
   * Build the final class volume from a keep decision.
   * @param {Uint32Array} ls   Component-label map (0 = background).
   * @param {number[]} dim     [nx, ny, nz] (required when relabelSuppressed).
   * @param {Uint32Array} kept Per-label surviving class id (>0) or 0 if suppressed.
   * @param {number} cl        Number of components.
   * @param {boolean} relabelSuppressed If true, suppressed components inherit the
   *   most common kept neighbour class instead of becoming background. Components
   *   touching no kept voxel (e.g. specks floating in true exterior background)
   *   still become 0.
   * @param {Uint32Array} [bw] Original class volume (needed with `familyOf`).
   * @param {(cls:number)=>number} [familyOf] Class-family gate for the neighbour
   *   vote - see neighbor_winners. Omit for the original unrestricted vote.
   * @returns {[number, Uint32Array]} [maxClass, volume].
   */
  finalize_volume(ls, dim, kept, cl, relabelSuppressed, bw = null, familyOf = null, inPlace = false) {
    const nvox = ls.length
    const winner = relabelSuppressed ? this.neighbor_winners(ls, dim, kept, cl, bw, familyOf) : null
    const eff = winner ? new Uint32Array(cl + 1) : kept
    let maxKept = 0
    for (let c = 1; c <= cl; c++) {
      let v = kept[c]
      if (winner) {
        if (!v) v = winner[c]
        eff[c] = v
      }
      if (v > maxKept) maxKept = v
    }
    const meta = labelMetaMap.get(ls)
    const hasMeta = meta && meta.cl === cl && meta.ls2bw.length === cl + 1 && meta.fgEnd < nvox
    let mxbw = 0
    if (hasMeta && meta.runs) {
      const runs = meta.runs
      const runLen = meta.runLen
      for (let c = 1; c <= cl; c++) {
        if (meta.sumls[c] > 0 && eff[c] > mxbw) mxbw = eff[c]
      }
      if (meta.bw === bw && bw instanceof Uint8Array && maxKept <= 255) {
        const patchFlag = new Uint8Array(cl + 1)
        let anyPatch = false
        for (let c = 1; c <= cl; c++) {
          if (meta.sumls[c] > 0 && eff[c] !== meta.ls2bw[c]) {
            patchFlag[c] = 1
            anyPatch = true
          }
        }
        const vxs = inPlace ? bw : bw.slice()
        if (anyPatch) {
          for (let rk = 0; rk < runLen; rk += 2) {
            const s = runs[rk]
            const e = runs[rk + 1]
            for (let i = s; i < e; i++) {
              const c = ls[i]
              if (patchFlag[c]) vxs[i] = eff[c]
            }
          }
        }
        return [mxbw, vxs]
      }
      const outU8 = (bw instanceof Uint8Array) && maxKept <= 255
      const vxs = outU8 ? new Uint8Array(nvox) : new Uint32Array(nvox)
      for (let rk = 0; rk < runLen; rk += 2) {
        const s = runs[rk]
        const e = runs[rk + 1]
        for (let i = s; i < e; i++) {
          const v = eff[ls[i]]
          if (v) vxs[i] = v
        }
      }
      return [mxbw, vxs]
    }
    const outU8 = (bw instanceof Uint8Array) && maxKept <= 255
    const vxs = outU8 ? new Uint8Array(nvox) : new Uint32Array(nvox)
    if (hasMeta) {
      if (meta.fgStart >= 0 && meta.fgEnd >= meta.fgStart) {
        for (let i = meta.fgStart; i <= meta.fgEnd; i++) {
          const c = ls[i]
          if (c !== 0) {
            const v = eff[c]
            if (v) {
              vxs[i] = v
              if (v > mxbw) mxbw = v
            }
          }
        }
      }
    } else {
      for (let i = 0; i < nvox; i++) {
        const c = ls[i]
        if (c !== 0) {
          const v = eff[c]
          if (v) {
            vxs[i] = v
            if (v > mxbw) mxbw = v
          }
        }
      }
    }
    return [mxbw, vxs]
  }

  /**
   * DIAGNOSTIC ONLY — does not modify the volume. Logs, per connected component,
   * its class id, size, whether it's the largest component of its class, how many
   * components its class fragments into, and what its surface touches (dominant
   * neighbouring class + how enclosed it is by that class, plus background
   * fraction). Use it to decide whether a stray region (e.g. a red blob inside
   * green) is a separate label swallowed by one neighbour (enclosure ~1, small,
   * not largest-of-class) vs. a connected protrusion of a large structure
   * (its class has 1 component / it IS the largest-of-class).
   *
   * @param {Uint32Array} bw   Original per-voxel class values.
   * @param {number} cl        Number of components.
   * @param {Uint32Array} ls   Component-label map (0 = background).
   * @param {number[]} dim     [nx, ny, nz].
   * @param {object} [options] { topN=50, minSize=1, label='diag' }.
   * @returns {object[]} the per-component rows (also printed via console.table).
   */
  diagnose_components(bw, cl, ls, dim, options = {}) {
    const topN = options.topN ?? 50
    const minSize = options.minSize ?? 1
    const tag = options.label ?? 'diag'
    const nx = dim[0]
    const ny = dim[1]
    const nz = dim[2]
    const sliceXY = nx * ny

    const ls2bw = new Uint32Array(cl + 1)
    const sumls = new Uint32Array(cl + 1)
    for (let i = 0; i < bw.length; i++) {
      const c = ls[i]
      if (c) {
        ls2bw[c] = bw[i]
        sumls[c]++
      }
    }

    // Per-component: histogram of FOREIGN neighbour classes, background contacts,
    // and total boundary-voxel contacts (neighbour is a different component/bg).
    const fhist = new Map()
    const bgContacts = new Uint32Array(cl + 1)
    const totalBoundary = new Uint32Array(cl + 1)
    const bump = (c, k) => {
      let h = fhist.get(c)
      if (!h) {
        h = new Map()
        fhist.set(c, h)
      }
      h.set(k, (h.get(k) || 0) + 1)
    }
    for (let z = 0; z < nz; z++) {
      for (let y = 0; y < ny; y++) {
        for (let x = 0; x < nx; x++) {
          const i = z * sliceXY + y * nx + x
          const c = ls[i]
          if (!c) {
            continue
          }
          const myClass = ls2bw[c]
          const check = (j) => {
            const nc = ls[j]
            if (nc === c) {
              return
            } // interior (same component) — not a boundary face
            totalBoundary[c]++
            const ncl = nc ? ls2bw[nc] : 0
            if (ncl === 0) {
              bgContacts[c]++
            } else if (ncl !== myClass) {
              bump(c, ncl)
            } // foreign-class face
          }
          if (x > 0) check(i - 1)
          if (x < nx - 1) check(i + 1)
          if (y > 0) check(i - nx)
          if (y < ny - 1) check(i + nx)
          if (z > 0) check(i - sliceXY)
          if (z < nz - 1) check(i + sliceXY)
        }
      }
    }

    const classCount = new Map()
    const classMax = new Map()
    for (let c = 1; c <= cl; c++) {
      const cls = ls2bw[c]
      classCount.set(cls, (classCount.get(cls) || 0) + 1)
      if (!classMax.has(cls) || sumls[c] > classMax.get(cls)) {
        classMax.set(cls, sumls[c])
      }
    }

    const rows = []
    for (let c = 1; c <= cl; c++) {
      if (sumls[c] < minSize) {
        continue
      }
      const cls = ls2bw[c]
      const h = fhist.get(c)
      let dom = 0
      let domN = 0
      let foreignTotal = 0
      if (h) {
        for (const [k, n] of h) {
          foreignTotal += n
          if (n > domN) {
            domN = n
            dom = k
          }
        }
      }
      const tb = totalBoundary[c] || 1
      rows.push({
        comp: c,
        class: cls,
        size: sumls[c],
        largestOfClass: sumls[c] === classMax.get(cls) ? 'Y' : 'n',
        compsInClass: classCount.get(cls),
        domNeighbor: dom,
        domFracForeign: foreignTotal ? +(domN / foreignTotal).toFixed(2) : 0,
        domFracBoundary: +(domN / tb).toFixed(2),
        bgFrac: +(bgContacts[c] / tb).toFixed(2)
      })
    }
    // Islands first: most enclosed by a single foreign class, largest of those first.
    rows.sort((a, b) => b.domFracForeign - a.domFracForeign || b.size - a.size)

    // Plain-text tables via console.log: console.table does NOT render from a
    // Web Worker (where inference may run) and is hidden when the console's
    // "Info" level is off. Text also avoids the (slow) table-render cost.
    const fmt = (rws, cols) => {
      const widths = cols.map((c) => Math.max(c.h.length, ...rws.map((r) => String(r[c.k]).length)))
      const line = (cells) => cells.map((s, i) => String(s).padStart(widths[i])).join('  ')
      return [line(cols.map((c) => c.h)), ...rws.map((r) => line(cols.map((c) => r[c.k])))].join('\n')
    }
    const compCols = [
      { k: 'comp', h: 'comp' }, { k: 'class', h: 'class' }, { k: 'size', h: 'size' },
      { k: 'largestOfClass', h: 'lrg' }, { k: 'compsInClass', h: 'nComp' },
      { k: 'domNeighbor', h: 'domNbr' }, { k: 'domFracForeign', h: 'encF' },
      { k: 'domFracBoundary', h: 'encB' }, { k: 'bgFrac', h: 'bgF' }
    ]
    console.log(
      `[${tag}] total components=${cl}, distinct classes=${classCount.size}\n` +
        `[${tag}] island candidates (encF≈1 + small size + lrg=n ⇒ swallowed island):\n` +
        fmt(rows.slice(0, topN), compCols)
    )

    const classRows = [...classCount.entries()]
      .map(([cls, cnt]) => ({ class: cls, components: cnt, maxCompSize: classMax.get(cls) }))
      .sort((a, b) => b.components - a.components)
    console.log(
      `[${tag}] per-class component counts (components=1 ⇒ fully connected):\n` +
        fmt(classRows.slice(0, 30), [
          { k: 'class', h: 'class' }, { k: 'components', h: 'comps' }, { k: 'maxCompSize', h: 'maxSize' }
        ])
    )

    return rows
  }

  /** Collect per-component class id and voxel count in a single pass. */
  _collectComponentStats(bw, cl, ls) {
    const meta = labelMetaMap.get(ls)
    if (meta && meta.cl === cl && meta.bw === bw && ls.length === bw.length) {
      return [meta.ls2bw, meta.sumls]
    }
    const nvox = bw.length
    const ls2bw = new Uint32Array(cl + 1)
    const sumls = new Uint32Array(cl + 1)
    for (let i = 0; i < nvox; i++) {
      const lsVal = ls[i]
      if (lsVal > 0) {
        ls2bw[lsVal] = bw[i]
        sumls[lsVal]++
      }
    }
    return [ls2bw, sumls]
  }

  /** Build per-component keep map in O(cl) preserving exact tie-break semantics. */
  _buildKeptMap(ls2bw, sumls, cl, targetClasses, largerIndexWins) {
    const kept = new Uint32Array(cl + 1)
    let maxClass = 0
    for (let i = 1; i <= cl; i++) {
      if (ls2bw[i] > maxClass) maxClass = ls2bw[i]
    }
    const filterAll = targetClasses === 'all'
    if (maxClass <= 65535) {
      const bestSize = new Uint32Array(maxClass + 1)
      const bestComp = new Uint32Array(maxClass + 1)
      for (let i = 1; i <= cl; i++) {
        const klass = ls2bw[i]
        if (klass === 0) continue
        if (filterAll || (targetClasses && targetClasses.has && targetClasses.has(klass))) {
          const sz = sumls[i]
          if (!bestComp[klass] || (largerIndexWins ? sz >= bestSize[klass] : sz > bestSize[klass])) {
            bestSize[klass] = sz
            bestComp[klass] = i
          }
        } else {
          kept[i] = klass
        }
      }
      for (let klass = 1; klass <= maxClass; klass++) {
        const c = bestComp[klass]
        if (c > 0) kept[c] = klass
      }
    } else {
      const bestByClass = new Map()
      for (let i = 1; i <= cl; i++) {
        const klass = ls2bw[i]
        if (klass === 0) continue
        if (filterAll || (targetClasses && targetClasses.has && targetClasses.has(klass))) {
          const sz = sumls[i]
          const prev = bestByClass.get(klass)
          if (!prev || (largerIndexWins ? sz >= prev.sz : sz > prev.sz)) {
            bestByClass.set(klass, { c: i, sz })
          }
        } else {
          kept[i] = klass
        }
      }
      for (const [klass, { c }] of bestByClass) {
        kept[c] = klass
      }
    }
    return kept
  }

  // retain only the largest cluster for each region
  // dim + relabelSuppressed are optional: when relabelSuppressed is true, blobs
  // that lose the per-class "largest" contest are repainted with their
  // surrounding surviving label instead of background (requires dim).
  largest_original_cluster_labels(bw, cl, ls, dim = null, relabelSuppressed = false, familyOf = null, inPlace = false) {
    const [ls2bw, sumls] = this._collectComponentStats(bw, cl, ls)
    const kept = this._buildKeptMap(ls2bw, sumls, cl, 'all', true)
    return this.finalize_volume(ls, dim, kept, cl, relabelSuppressed, bw, familyOf, inPlace)
  }

  // Filter clusters based on target classes rules
  // targetClasses: 'all', or Set of class IDs.
  // If 'all' or class in targetClasses: keep only largest component of that class.
  // Else: keep all components of that class.
  filter_clusters(bw, cl, ls, targetClasses, dim = null, relabelSuppressed = false, familyOf = null, inPlace = false) {
    const [ls2bw, sumls] = this._collectComponentStats(bw, cl, ls)
    const kept = this._buildKeptMap(ls2bw, sumls, cl, targetClasses, false)
    return this.finalize_volume(ls, dim, kept, cl, relabelSuppressed, bw, familyOf, inPlace)
  }

  /**
   * Filter clusters based on a size ratio threshold relative to the largest cluster for that class.
   * Logic:
   * 1. Find max size for each class.
   * 2. Keep component if size >= max_size_of_class * minRatio.
   * @param {Uint32Array} bw - Original voxel values (unused directly for filtering decision logic but used for return)
   * @param {number} cl - Number of regions
   * @param {Uint32Array} ls - Label map
   * @param {number} minRatio - Threshold (e.g. 0.3)
   */
  filter_clusters_by_ratio(bw, cl, ls, minRatio, dim = null, relabelSuppressed = false, familyOf = null) {
    const nvox = bw.length
    const ls2bw = new Uint32Array(cl + 1).fill(0)
    const sumls = new Uint32Array(cl + 1).fill(0)

    // 1. Map labels to original classes and count sizes
    for (let i = 0; i < nvox; i++) {
      // ls[i] is component label
      const comp = ls[i]
      if (comp > 0) {
        // Mapping check (assuming consistent labeling)
        if (ls2bw[comp] === 0) ls2bw[comp] = bw[i];
        sumls[comp]++;
      }
    }

    // 2. Determine Max Size per Class
    // Map: ClassID -> MaxSize
    const classMaxSize = new Map();
    for (let i = 1; i <= cl; i++) {
      const classID = ls2bw[i];
      const size = sumls[i];
      if (!classMaxSize.has(classID) || size > classMaxSize.get(classID)) {
        classMaxSize.set(classID, size);
      }
    }

    // 3. Determine validity
    const keepLabel = new Uint8Array(cl + 1).fill(0);
    for (let i = 1; i <= cl; i++) {
      const classID = ls2bw[i];
      const size = sumls[i];
      const maxSize = classMaxSize.get(classID) || 0;

      if (size >= maxSize * minRatio) {
        keepLabel[i] = 1;
      }
    }

    // 4. Reconstruct: kept[c] = surviving class id, or 0 if suppressed.
    const kept = new Uint32Array(cl + 1).fill(0)
    for (let i = 1; i <= cl; i++) {
      if (keepLabel[i]) kept[i] = ls2bw[i]
    }
    return this.finalize_volume(ls, dim, kept, cl, relabelSuppressed, bw, familyOf)
  }

  // given a 3D image, return a clustered label map
  /**
   * Merge 6-connected per-class guard components (`ls`, `1..cl`) into binary
   * foreground connected components via single-pass union-find, returning the
   * winning largest binary component root (larger root wins ties) along with
   * per-component sizes and optional class IDs.
   */
  _binaryComponentsFromLabels(bw, cl, ls, dim, collectClass = false) {
    const nx = dim[0] | 0
    const ny = dim[1] | 0
    const nz = dim[2] | 0
    const plane = nx * ny
    const meta = labelMetaMap.get(ls)
    const hasMeta = meta && meta.cl === cl && ls.length === plane * nz && (!collectClass || meta.bw === bw)
    if (hasMeta && meta.conn === 6 && meta.distinctFgClasses <= 1) {
      const parent = new Uint32Array(cl + 1)
      let bestRoot = 0
      let bestBinSize = 0
      for (let r = 1; r <= cl; r++) {
        parent[r] = r
        const sz = meta.sumls[r]
        if (sz > 0 && sz >= bestBinSize) {
          bestBinSize = sz
          bestRoot = r
        }
      }
      return { parent, compSize: meta.sumls, compClass: collectClass ? meta.ls2bw : null, bestRoot }
    }
    const compSize = hasMeta ? meta.sumls : new Uint32Array(cl + 1)
    const compClass = hasMeta ? (collectClass ? meta.ls2bw : null) : (collectClass ? new Uint32Array(cl + 1) : null)
    const parent = new Uint32Array(cl + 1)
    for (let c = 1; c <= cl; c++) parent[c] = c

    if (hasMeta && meta.conn === 6 && meta.runs && meta.bw === bw) {
      const unite = (a, b) => {
        while (parent[a] !== a) {
          parent[a] = parent[parent[a]]
          a = parent[a]
        }
        while (parent[b] !== b) {
          parent[b] = parent[parent[b]]
          b = parent[b]
        }
        if (a !== b) {
          if (a < b) parent[b] = a
          else parent[a] = b
        }
      }
      const runs = meta.runs
      const runLen = meta.runLen
      for (let rk = 0; rk < runLen; rk += 2) {
        const s = runs[rk]
        const e = runs[rk + 1]
        const sl = (s / plane) | 0
        const rem = s - sl * plane
        const r = (rem / nx) | 0
        let c0 = rem - r * nx
        for (let i = s; i < e; i++, c0++) {
          const val = bw[i]
          let myComp = 0
          if (sl > 0) {
            const vZ = bw[i - plane]
            if (vZ !== 0 && vZ !== val) {
              myComp = ls[i]
              unite(myComp, ls[i - plane])
            }
          }
          if (r > 0) {
            const vY = bw[i - nx]
            if (vY !== 0 && vY !== val) {
              if (!myComp) myComp = ls[i]
              unite(myComp, ls[i - nx])
            }
          }
          if (c0 > 0) {
            const vX = bw[i - 1]
            if (vX !== 0 && vX !== val) {
              if (!myComp) myComp = ls[i]
              unite(myComp, ls[i - 1])
            }
          }
        }
      }
    } else {
      const slStart = hasMeta ? meta.minSl : 0
      const slEnd = hasMeta ? meta.maxSl : nz - 1
      let i = slStart * plane
      for (let sl = slStart; sl <= slEnd; sl++) {
        for (let r = 0; r < ny; r++) {
          for (let c0 = 0; c0 < nx; c0++, i++) {
            const c = ls[i]
            if (c === 0) continue
            if (!hasMeta) {
              compSize[c]++
              if (compClass && compClass[c] === 0) compClass[c] = bw[i]
            }
            let rc = c
            while (parent[rc] !== rc) {
              parent[rc] = parent[parent[rc]]
              rc = parent[rc]
            }
            if (sl > 0) {
              const nb = ls[i - plane]
              if (nb !== 0 && nb !== c) {
                let rn = nb
                while (parent[rn] !== rn) {
                  parent[rn] = parent[parent[rn]]
                  rn = parent[rn]
                }
                if (rc !== rn) {
                  if (rc < rn) parent[rn] = rc
                  else {
                    parent[rc] = rn
                    rc = rn
                  }
                }
              }
            }
            if (r > 0) {
              const nb = ls[i - nx]
              if (nb !== 0 && nb !== c) {
                let rn = nb
                while (parent[rn] !== rn) {
                  parent[rn] = parent[parent[rn]]
                  rn = parent[rn]
                }
                if (rc !== rn) {
                  if (rc < rn) parent[rn] = rc
                  else {
                    parent[rc] = rn
                    rc = rn
                  }
                }
              }
            }
            if (c0 > 0) {
              const nb = ls[i - 1]
              if (nb !== 0 && nb !== c) {
                let rn = nb
                while (parent[rn] !== rn) {
                  parent[rn] = parent[parent[rn]]
                  rn = parent[rn]
                }
                if (rc !== rn) {
                  if (rc < rn) parent[rn] = rc
                  else parent[rc] = rn
                }
              }
            }
          }
        }
      }
    }

    const binSize = new Uint32Array(cl + 1)
    for (let c = 1; c <= cl; c++) {
      let r = c
      while (parent[r] !== r) r = parent[r]
      parent[c] = r
      binSize[r] += compSize[c]
    }
    let bestRoot = 0
    let bestBinSize = 0
    for (let r = 1; r <= cl; r++) {
      const sz = binSize[r]
      if (sz > 0 && sz >= bestBinSize) {
        bestBinSize = sz
        bestRoot = r
      }
    }
    return { parent, compSize, compClass, bestRoot }
  }

  /** Zero out voxels outside the largest 6-connected binary foreground component using guard labels. */
  applyLargestBinaryMaskInPlace(bw, cl, ls, dim) {
    const nvox = bw.length
    if (cl === 0) {
      bw.fill(0)
      return bw
    }
    const meta = labelMetaMap.get(ls)
    const hasMeta = meta && meta.cl === cl && ls.length === nvox
    if (hasMeta && meta.conn === 6 && meta.distinctFgClasses <= 1) {
      let bestRoot = 0
      let bestBinSize = 0
      for (let r = 1; r <= cl; r++) {
        const sz = meta.sumls[r]
        if (sz > 0 && sz >= bestBinSize) {
          bestBinSize = sz
          bestRoot = r
        }
      }
      if (meta.runs && meta.bw === bw) {
        if (cl > 1) {
          const runs = meta.runs
          const runLen = meta.runLen
          for (let rk = 0; rk < runLen; rk += 2) {
            const s = runs[rk]
            const e = runs[rk + 1]
            for (let i = s; i < e; i++) {
              if (ls[i] !== bestRoot) bw[i] = 0
            }
          }
        }
        return bw
      }
      if (meta.fgStart > 0) bw.fill(0, 0, meta.fgStart)
      if (meta.fgEnd >= meta.fgStart) {
        for (let i = meta.fgStart; i <= meta.fgEnd; i++) {
          if (ls[i] !== bestRoot) bw[i] = 0
        }
        if (meta.fgEnd + 1 < nvox) bw.fill(0, meta.fgEnd + 1)
      } else {
        bw.fill(0)
      }
      return bw
    }
    const { parent, bestRoot } = this._binaryComponentsFromLabels(bw, cl, ls, dim, false)
    if (hasMeta && meta.runs && meta.bw === bw) {
      const runs = meta.runs
      const runLen = meta.runLen
      for (let rk = 0; rk < runLen; rk += 2) {
        const s = runs[rk]
        const e = runs[rk + 1]
        for (let i = s; i < e; i++) {
          if (parent[ls[i]] !== bestRoot) bw[i] = 0
        }
      }
      return bw
    }
    if (hasMeta && meta.fgEnd >= meta.fgStart) {
      if (meta.fgStart > 0) bw.fill(0, 0, meta.fgStart)
      for (let i = meta.fgStart; i <= meta.fgEnd; i++) {
        const c = ls[i]
        if (c === 0 || parent[c] !== bestRoot) bw[i] = 0
      }
      if (meta.fgEnd + 1 < nvox) bw.fill(0, meta.fgEnd + 1)
    } else {
      for (let i = 0; i < nvox; i++) {
        const c = ls[i]
        if (c === 0 || parent[c] !== bestRoot) bw[i] = 0
      }
    }
    return bw
  }

  /**
   * Single-pass hierarchical filter reusing conn=6 per-class guard labels:
   * 1. Selects the largest 6-connected binary foreground component (larger root wins ties),
   *    dropping all disconnected exterior or resection-cavity islands to 0.
   * 2. Within that main binary component, retains only the largest connected component
   *    for classes in `targetClasses` ('all' or a Set of class IDs), breaking per-class
   *    size ties via `largerIndexWins` (true matches largest_original_cluster_labels;
   *    false matches filter_clusters).
   * 3. Optionally relabels suppressed components inside the main binary component via
   *    neighbor_winners (components outside bestRoot touch no kept 6-neighbors and stay 0).
   */
  filterHierarchicalFromLabels(
    bw,
    cl,
    ls,
    dim,
    targetClasses = 'all',
    largerIndexWins = true,
    relabelSuppressed = false,
    familyOf = null,
    inPlace = false
  ) {
    if (cl === 0) {
      const out = bw instanceof Uint8Array ? (inPlace ? bw : new Uint8Array(bw.length)) : new Uint32Array(bw.length)
      return [0, out]
    }
    const { parent, compSize, compClass, bestRoot } = this._binaryComponentsFromLabels(bw, cl, ls, dim, true)
    const activeCompClass = new Uint32Array(cl + 1)
    for (let c = 1; c <= cl; c++) {
      if (parent[c] === bestRoot) activeCompClass[c] = compClass[c]
    }
    const kept = this._buildKeptMap(activeCompClass, compSize, cl, targetClasses, largerIndexWins)
    return this.finalize_volume(ls, dim, kept, cl, relabelSuppressed, bw, familyOf, inPlace)
  }

  filter18ClassFromLabels(bw, cl, ls, dim, targetClasses, relabelSuppressed = false, familyOf = null, inPlace = false) {
    return this.filterHierarchicalFromLabels(bw, cl, ls, dim, targetClasses, false, relabelSuppressed, familyOf, inPlace)
  }

  // for an explanation and optimized C code see
  // https://github.com/seung-lab/connected-components-3d
  bwlabel(img, dim, conn = 26, binarize = false, onlyLargestClusterPerClass = false, scratch = null) {
    const start = Date.now()
    const nvox = dim[0] * dim[1] * dim[2]
    if (![6, 18, 26].includes(conn)) {
      console.log('bwlabel: conn must be 6, 18 or 26.')
      return [0, new Uint32Array(nvox)]
    }
    if (dim[0] < 2 || dim[1] < 2 || dim[2] < 1) {
      console.log('bwlabel: img must be 2 or 3-dimensional')
      return [0, new Uint32Array(nvox)]
    }
    let bw
    if (binarize) {
      bw = new Uint8Array(nvox)
      for (let i = 0; i < nvox; i++) {
        if (img[i] !== 0.0) {
          bw[i] = 1
        }
      }
    } else if (
      img instanceof Uint8Array ||
      img instanceof Uint8ClampedArray ||
      img instanceof Uint16Array ||
      img instanceof Uint32Array ||
      img instanceof Int8Array ||
      img instanceof Int16Array ||
      img instanceof Int32Array
    ) {
      if (img.length === nvox) {
        bw = img
      } else {
        bw = new Uint32Array(nvox)
        bw.set(img.subarray(0, nvox))
      }
    } else {
      bw = new Uint32Array(nvox)
      bw.set(img)
    }
    this._lastInitialRange = null
    this._lastMeta = null
    let [ttn, tt, il] = this.do_initial_labelling(bw, dim, conn, scratch)
    if (tt === undefined) {
      tt = new Uint32Array(0)
    }
    const [cl, ls] = this.translate_labels(il, dim, tt, ttn, bw, this._lastInitialRange)
    if (this._lastMeta) {
      labelMetaMap.set(ls, this._lastMeta)
    }
    console.log(conn + ' neighbor clustering into ' + cl + ' regions in ' + (Date.now() - start) + 'ms')
    if (onlyLargestClusterPerClass) {
      const [nbw, bwMx] = this.largest_original_cluster_labels(bw, cl, ls)
      return [nbw, bwMx]
    }
    return [cl, ls]
  } // bwlabel()

  /**
   * Filter clusters based on rank (keep top K largest per class).
   * @param {Uint32Array} bw - Original voxel values (unused directly for filtering decision logic but used for return)
   * @param {number} cl - Number of regions
   * @param {Uint32Array} ls - Label map
   * @param {number} maxRank - Max number of components to keep per class (e.g. 2)
   */
  filter_clusters_by_rank(bw, cl, ls, maxRank, minRatio = 0, dim = null, relabelSuppressed = false, nearBrainMaxGap = null, diag = false, familyOf = null) {
    const nvox = bw.length
    const ls2bw = new Uint32Array(cl + 1).fill(0)
    const sumls = new Uint32Array(cl + 1).fill(0)

    // Spatial gate (`nearBrainMaxGap`, in VOXELS): a NON-largest kept component
    // is retained only if the gap between its bounding box and the MAIN BRAIN's
    // bounding box is <= this many voxels. A genuinely detached cerebellum
    // touches the cerebrum (gap ~= 0) and survives; a phantom blob outside the
    // head is separated by a real gap and is dropped. Unlike a centroid-in-
    // expanded-bbox test, a bbox GAP does not depend on the brain's size
    // (the brain bbox fills most of a 256^3 head, which made the expanded-bbox
    // test a near no-op). Disabled (null) -> original rank-only behavior.
    const useDist = nearBrainMaxGap != null && Array.isArray(dim) && dim.length === 3;
    // Decode a linear index to (A, B, C) using the SAME convention as idx():
    // idx = C*DIM0*DIM1 + B*DIM0 + A, i.e. A is the fastest-varying axis.
    const D0 = useDist ? dim[0] : 0;
    const D1 = useDist ? dim[1] : 0;
    const minA = useDist ? new Int32Array(cl + 1).fill(2147483647) : null;
    const maxA = useDist ? new Int32Array(cl + 1).fill(-1) : null;
    const minB = useDist ? new Int32Array(cl + 1).fill(2147483647) : null;
    const maxB = useDist ? new Int32Array(cl + 1).fill(-1) : null;
    const minC = useDist ? new Int32Array(cl + 1).fill(2147483647) : null;
    const maxC = useDist ? new Int32Array(cl + 1).fill(-1) : null;

    // 1. Map labels to original classes, count sizes, accumulate per-comp bbox
    for (let i = 0; i < nvox; i++) {
      const comp = ls[i]
      if (comp > 0) {
        if (ls2bw[comp] === 0) ls2bw[comp] = bw[i];
        sumls[comp]++;
        if (useDist) {
          const a = i % D0;
          const t = (i / D0) | 0;
          const b = t % D1;
          const c = (t / D1) | 0;
          if (a < minA[comp]) minA[comp] = a; if (a > maxA[comp]) maxA[comp] = a;
          if (b < minB[comp]) minB[comp] = b; if (b > maxB[comp]) maxB[comp] = b;
          if (c < minC[comp]) minC[comp] = c; if (c > maxC[comp]) maxC[comp] = c;
        }
      }
    }

    // Spatial gate setup: find the globally-largest component (the brain), then
    // measure each candidate's SURFACE distance to it -- the shortest path of
    // voxels (through any space) from the candidate to the brain, via a
    // multi-source 6-connected BFS from all brain voxels. A detached cerebellum
    // nearly touches the cerebrum (a few voxels of CSF), so its surface distance
    // is small; a phantom blob outside the head is separated by a large empty
    // gap. NOTE: a bounding-box gap fails here -- the cerebrum bbox fills most of
    // the head and ENCLOSES the phantom's region, giving a misleading gap of 0;
    // surface distance measures the actual empty separation instead.
    let surfDist = null;  // Float64Array(cl+1): min BFS distance of each comp to brain
    let brainComp = 0;
    if (useDist) {
      let brainSize = -1;
      for (let i = 1; i <= cl; i++) {
        if (sumls[i] > brainSize) { brainSize = sumls[i]; brainComp = i; }
      }
      // City-block BFS, capped a few layers beyond the threshold (monotonic, so
      // the cap is all the gate needs). dist = -1 stays "farther than the cap".
      const MAX_SCAN = Math.max(2, Math.ceil(nearBrainMaxGap) + 4);
      const D0D1 = D0 * D1;
      const dist = new Int16Array(nvox).fill(-1);
      let frontier = [];
      for (let i = 0; i < nvox; i++) {
        if (ls[i] === brainComp) { dist[i] = 0; frontier.push(i); }
      }
      for (let d = 1; d <= MAX_SCAN && frontier.length; d++) {
        const next = [];
        for (let f = 0; f < frontier.length; f++) {
          const v = frontier[f];
          const a = v % D0;
          const t = (v / D0) | 0;
          const b = t % D1;
          if (a > 0 && dist[v - 1] === -1) { dist[v - 1] = d; next.push(v - 1); }
          if (a < D0 - 1 && dist[v + 1] === -1) { dist[v + 1] = d; next.push(v + 1); }
          if (b > 0 && dist[v - D0] === -1) { dist[v - D0] = d; next.push(v - D0); }
          if (b < D1 - 1 && dist[v + D0] === -1) { dist[v + D0] = d; next.push(v + D0); }
          if (v - D0D1 >= 0 && dist[v - D0D1] === -1) { dist[v - D0D1] = d; next.push(v - D0D1); }
          if (v + D0D1 < nvox && dist[v + D0D1] === -1) { dist[v + D0D1] = d; next.push(v + D0D1); }
        }
        frontier = next;
      }
      // Per-component minimum distance to the brain (FAR if beyond the scan cap).
      const FAR = MAX_SCAN + 1;
      surfDist = new Float64Array(cl + 1).fill(FAR);
      for (let i = 0; i < nvox; i++) {
        const comp = ls[i];
        if (comp > 0 && comp !== brainComp) {
          const dd = dist[i] >= 0 ? dist[i] : FAR;
          if (dd < surfDist[comp]) surfDist[comp] = dd;
        }
      }
      if (diag) {
        console.log(`[rank-filter] brain comp=${brainComp} size=${brainSize} ` +
          `bbox A[${minA[brainComp]},${maxA[brainComp]}] B[${minB[brainComp]},${maxB[brainComp]}] C[${minC[brainComp]},${maxC[brainComp]}] | maxGap=${nearBrainMaxGap} scan=${MAX_SCAN}`);
      }
    }

    // 2. Group components by Class ID
    const classComponents = new Map(); // ClassID -> [{compID, size}, ...]
    for (let i = 1; i <= cl; i++) {
      const classID = ls2bw[i];
      const size = sumls[i];
      if (!classComponents.has(classID)) {
        classComponents.set(classID, []);
      }
      classComponents.get(classID).push({ i, size });
    }

    // 3. Mark which components to keep
    const keepLabel = new Uint8Array(cl + 1).fill(0);

    for (const [classID, components] of classComponents.entries()) {
      // Sort descending by size
      components.sort((a, b) => b.size - a.size);

      // Optional size floor: keep a top-K component only if it is at least
      // `minRatio` of the LARGEST component in its class. This drops tiny stray
      // blobs that happen to land within the top-K (e.g. a misclassified chin
      // speck) while preserving large detached structures such as a separated
      // cerebellum, which sits far above the floor. The largest component
      // (k=0, ratio 1.0) always passes. Components are size-sorted, so once one
      // falls below the floor every later one does too -> break. minRatio=0
      // (default) preserves the original rank-only behavior.
      const largest = components.length ? components[0].size : 0;
      const sizeFloor = minRatio > 0 ? largest * minRatio : 0;

      // Keep top K (subject to the size floor). The per-class largest (k=0) is
      // always kept; secondary kept components must also pass the spatial gate
      // (when enabled) so far-away phantoms are dropped but a detached
      // cerebellum (touching the brain, gap ~= 0) survives.
      const count = Math.min(components.length, maxRank);
      for (let k = 0; k < count; k++) {
        const comp = components[k];
        if (comp.size < sizeFloor) {
          if (diag && k > 0) console.log(`[rank-filter] class ${classID} #${k}: size=${comp.size} DROP (below ${(minRatio*100).toFixed(0)}% floor)`);
          break;
        }
        if (k > 0 && useDist) {
          const g = surfDist[comp.i];
          const pass = g <= nearBrainMaxGap;
          if (diag) console.log(`[rank-filter] class ${classID} #${k}: size=${comp.size} surfDist=${g} -> ${pass ? 'KEEP' : 'DROP (too far)'}`);
          if (!pass) continue;
        }
        keepLabel[comp.i] = 1;
      }
    }

    // 4. Reconstruct: kept[c] = surviving class id, or 0 if suppressed.
    const kept = new Uint32Array(cl + 1).fill(0)
    for (let i = 1; i <= cl; i++) {
      if (keepLabel[i]) kept[i] = ls2bw[i]
    }
    return this.finalize_volume(ls, dim, kept, cl, relabelSuppressed, bw, familyOf)
  }
}
