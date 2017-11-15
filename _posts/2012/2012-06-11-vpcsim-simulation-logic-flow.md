---
title: VPCsim simulation logic flow
date: 2012-06-11T23:59:31+00:00
layout: post
categories:
  - science ed vpcsim
---
Transferring from other note files to my lab records (better late than never!)

The basic simulation model structure for VPCsim:

  * For each new generation:
      * Generate a disturbance map for this generation based on the permanent disturbances and the ongoing disturbance rate
      * Generate an age matrix of all 0's
      * For each cell in the matrix:
          * If it was a permanent gap:
              * Store the permanent gap (-1) for that cell
              * Leave age at 0
          * Else it was not a permanent gap:
              * If it is a disturbance on the disturbance map:
                  * store the gap for that cell
                  * Leave age at 0
                  * Update the species counts
              * Else it was not a disturbance on the disturbance map:
                  * Get the neighbor species counts
                  * Determine whether the current plant survives or dies based on age and the environment
                  * If the current plant survives:
                      * Calculate the replacement probabilities based on the current plant and the neighbor species counts
                      * Determine the replacement plant randomly from the probabilities
                      * If the current plant does not get replaced:
                          * Store the same plant species for that cell
                          * Increment its age
                          * Update the species counts
                      * Else the current plant does get replaced:
                          * Store the new plant species for that cell
                          * Leave age at 0
                          * Update the species counts
                  * Else the current plant does not survive:
                      * Calculate replacement probabilities based on a gap and the neighbor species counts
                      * Determine the replacement plant randomly from the probabilities
                      * If the current plant (a gap in this case) does not get replaced:
                          * Store the gap for that cell
                          * Leave age at 0
                          * Update the species counts
                      * Else the current plant (a gap) does get replaced:
                          * Store the new plant species for that cell
                          * Leave age at 0
                          * Update the species counts
