---
title:  UofU chpc command reference
date:  2018-04-20
layout: post
categories:

---
Useful commands for the University of Utah CHPC cluster:

# Modules

~~~
module # base command, lists options
module avail # shows available modules
module load <somename> # loads a module
module swap <moduletoremove> <moduletoadd> # swaps one module for another
module spider # gives info about modules that can't be loaded immediately and what needs to be done to be able to load them
module save <somename> # saves a set of modules with a name
module savelist # shows the names of saved module sets
module restore <somename> # restores a saved set of modules
module purge # removes all modules
~~~

# Aliases

~~~
mysq # lists my jobs in the queue
wsq # lists jobs in the wolf-kp queue
wd # change to my working directory
~~~

# SLURM stuff

~~~
sbatch <slurmfile.sh> # submits job
scancel <jobid> # cancels job
~~~
