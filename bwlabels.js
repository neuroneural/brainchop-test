export class BWLabeler {
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
  do_initial_labelling(bw, dim, conn) {
    const naboPS = new Uint32Array(32)
    const tn = new Uint32Array(32)
    let label = 1
    const kGrowArrayBy = 8192
    let ttn = kGrowArrayBy
    let tt = new Uint32Array(ttn).fill(0)
    const il = new Uint32Array(dim[0] * dim[1] * dim[2]).fill(0)
    const nabo = new Uint32Array(27)
    for (let sl = 0; sl < dim[2]; sl++) {
      for (let c = 0; c < dim[1]; c++) {
        for (let r = 0; r < dim[0]; r++) {
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
            if (c && r < dim[0] - 1) {
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

  // remove any residual gaps so label numbers are dense rather than sparse
  translate_labels(il, dim, tt, ttn) {
    const nvox = dim[0] * dim[1] * dim[2]
    let ml = 0
    const l = new Uint32Array(nvox).fill(0)
    for (let i = 0; i < ttn; i++) {
      ml = Math.max(ml, tt[i])
    }
    const fl = new Uint32Array(ml).fill(0)
    let cl = 0
    for (let i = 0; i < nvox; i++) {
      if (il[i]) {
        if (!fl[tt[il[i] - 1] - 1]) {
          cl += 1
          fl[tt[il[i] - 1] - 1] = cl
        }
        l[i] = fl[tt[il[i] - 1] - 1]
      }
    }
    return [cl, l]
  } // translate_labels()

  // retain only the largest cluster for each region
  largest_original_cluster_labels(bw, cl, ls) {
    const nvox = bw.length
    const ls2bw = new Uint32Array(cl + 1).fill(0)
    const sumls = new Uint32Array(cl + 1).fill(0)
    for (let i = 0; i < nvox; i++) {
      const bwVal = bw[i]
      const lsVal = ls[i]
      ls2bw[lsVal] = bwVal
      sumls[lsVal]++
    }
    let mxbw = 0
    for (let i = 0; i < cl + 1; i++) {
      const bwVal = ls2bw[i]
      mxbw = Math.max(mxbw, bwVal)
      // see if this is largest cluster of this bw-value
      for (let j = 0; j < cl + 1; j++) {
        if (j === i) {
          continue
        }
        if (bwVal !== ls2bw[j]) {
          continue
        }
        if (sumls[i] < sumls[j]) {
          ls2bw[i] = 0
        } else if (sumls[i] === sumls[j] && i < j) {
          ls2bw[i] = 0
        } // ties: arbitrary winner
      }
    }
    const vxs = new Uint32Array(nvox).fill(0)
    for (let i = 0; i < nvox; i++) {
      vxs[i] = ls2bw[ls[i]]
    }
    return [mxbw, vxs]
  }

  // Filter clusters based on target classes rules
  // targetClasses: 'all', or Set of class IDs.
  // If 'all' or class in targetClasses: keep only largest component of that class.
  // Else: keep all components of that class.
  filter_clusters(bw, cl, ls, targetClasses) {
    const nvox = bw.length
    const ls2bw = new Uint32Array(cl + 1).fill(0)
    const sumls = new Uint32Array(cl + 1).fill(0)

    // 1. Map labels to original classes and count sizes
    for (let i = 0; i < nvox; i++) {
      const bwVal = bw[i]
      const lsVal = ls[i]
      // Only track if non-background (assuming 0 is bg)
      if (lsVal > 0) {
        ls2bw[lsVal] = bwVal
        sumls[lsVal]++
      }
    }

    // 2. Determine which components to keep
    const keepLabel = new Uint8Array(cl + 1).fill(1) // Default keep

    // For each component i
    for (let i = 1; i <= cl; i++) {
      const bwVal = ls2bw[i]

      // Check if we should filter this class
      const shouldFilter = (targetClasses === 'all') || (targetClasses.has && targetClasses.has(bwVal));

      if (shouldFilter) {
        // Check if there is a larger component j with same bwVal
        for (let j = 1; j <= cl; j++) {
          if (i === j) continue;
          if (ls2bw[j] !== bwVal) continue;

          if (sumls[j] > sumls[i]) {
            keepLabel[i] = 0; // Suppress smaller
            break;
          } else if (sumls[j] === sumls[i] && j < i) { // Tie-break
            // maintain strictly one
            // Convention: keep lower index if sizes equal? 
            // Logic in original was: if (i < j) zero out i? No.
            // Original: if (sumls[i] == sumls[j] && i < j) ls2bw[i] = 0.
            // This means if i < j, i is removed. So j is kept. larger index wins?
            // Let's stick to original logic:
            // "if (sumls[i] === sumls[j] && i < j) { ls2bw[i] = 0 }"
            // Wait, if i < j, loop reaches j later.
            // When checking i: compare with j. if equal and i < j, kill i.
            // When checking j: compare with i. if equal and j > i, (j !< i) so don't kill j?
            // Correct. Larger index keeps.
            keepLabel[i] = 0;
            break;
          }
        }
      }
    }

    // 3. Reconstruct
    const vxs = new Uint32Array(nvox).fill(0) // Default 0
    let mxbw = 0
    for (let i = 0; i < nvox; i++) {
      // If we keep the label, restore original value
      // ls[i] is component label
      const comp = ls[i]
      if (comp > 0 && keepLabel[comp]) {
        vxs[i] = ls2bw[comp]
        if (ls2bw[comp] > mxbw) mxbw = ls2bw[comp]
      }
    }
    return [mxbw, vxs]
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
  filter_clusters_by_ratio(bw, cl, ls, minRatio) {
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

    // 4. Reconstruct
    const vxs = new Uint32Array(nvox).fill(0)
    let mxbw = 0
    for (let i = 0; i < nvox; i++) {
      const comp = ls[i]
      if (comp > 0 && keepLabel[comp]) {
        vxs[i] = ls2bw[comp] // Restore Class Value
        if (ls2bw[comp] > mxbw) mxbw = ls2bw[comp]
      }
    }
    return [mxbw, vxs]
  }

  // given a 3D image, return a clustered label map
  // for an explanation and optimized C code see
  // https://github.com/seung-lab/connected-components-3d
  bwlabel(img, dim, conn = 26, binarize = false, onlyLargestClusterPerClass = false) {
    const start = Date.now()
    const nvox = dim[0] * dim[1] * dim[2]
    const bw = new Uint32Array(nvox).fill(0)
    if (![6, 18, 26].includes(conn)) {
      console.log('bwlabel: conn must be 6, 18 or 26.')
      return [0, bw]
    }
    if (dim[0] < 2 || dim[1] < 2 || dim[2] < 1) {
      console.log('bwlabel: img must be 2 or 3-dimensional')
      return [0, bw]
    }
    if (binarize) {
      for (let i = 0; i < nvox; i++) {
        if (img[i] !== 0.0) {
          bw[i] = 1
        }
      }
    } else {
      bw.set(img)
    }
    let [ttn, tt, il] = this.do_initial_labelling(bw, dim, conn)
    if (tt === undefined) {
      tt = new Uint32Array(0)
    }
    const [cl, ls] = this.translate_labels(il, dim, tt, ttn)
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
  filter_clusters_by_rank(bw, cl, ls, maxRank) {
    const nvox = bw.length
    const ls2bw = new Uint32Array(cl + 1).fill(0)
    const sumls = new Uint32Array(cl + 1).fill(0)

    // 1. Map labels to original classes and count sizes
    for (let i = 0; i < nvox; i++) {
      const comp = ls[i]
      if (comp > 0) {
        if (ls2bw[comp] === 0) ls2bw[comp] = bw[i];
        sumls[comp]++;
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

      // Keep top K
      const count = Math.min(components.length, maxRank);
      for (let k = 0; k < count; k++) {
        keepLabel[components[k].i] = 1;
      }
    }

    // 4. Reconstruct
    const vxs = new Uint32Array(nvox).fill(0)
    let mxbw = 0
    for (let i = 0; i < nvox; i++) {
      const comp = ls[i]
      if (comp > 0 && keepLabel[comp]) {
        vxs[i] = ls2bw[comp] // Restore Class Value
        if (ls2bw[comp] > mxbw) mxbw = ls2bw[comp]
      }
    }
    return [mxbw, vxs]
  }
}
