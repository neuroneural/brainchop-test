// Pre-change quadratic selectors from webgpu b5b3d5e. Test/benchmark oracle only.
import { BWLabeler } from '../../bwlabels.js'

export class QuadraticBWLabeler extends BWLabeler {
  largest_original_cluster_labels(bw, cl, ls, dim = null, relabelSuppressed = false, familyOf = null) {
    const nvox = bw.length
    const ls2bw = new Uint32Array(cl + 1).fill(0)
    const sumls = new Uint32Array(cl + 1).fill(0)
    for (let i = 0; i < nvox; i++) {
      const bwVal = bw[i]
      const lsVal = ls[i]
      ls2bw[lsVal] = bwVal
      sumls[lsVal]++
    }
    for (let i = 0; i < cl + 1; i++) {
      const bwVal = ls2bw[i]
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
    // ls2bw now holds the surviving class per label (0 for suppressed). Reuse it
    // directly as the `kept` map for finalize_volume.
    return this.finalize_volume(ls, dim, ls2bw, cl, relabelSuppressed, bw, familyOf)
  }

  // Filter clusters based on target classes rules
  // targetClasses: 'all', or Set of class IDs.
  // If 'all' or class in targetClasses: keep only largest component of that class.
  // Else: keep all components of that class.
  filter_clusters(bw, cl, ls, targetClasses, dim = null, relabelSuppressed = false, familyOf = null) {
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

    // 3. Reconstruct: kept[c] = surviving class id, or 0 if suppressed.
    const kept = new Uint32Array(cl + 1).fill(0)
    for (let i = 1; i <= cl; i++) {
      if (keepLabel[i]) kept[i] = ls2bw[i]
    }
    return this.finalize_volume(ls, dim, kept, cl, relabelSuppressed, bw, familyOf)
  }

}
