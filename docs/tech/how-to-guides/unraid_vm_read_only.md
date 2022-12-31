# Unraid vm won't boot

When trying to start a VM in unraid - get a popup with the message:

```
## Execution error

unable to open /mnt/user/domains/Ubuntu/vdisk1.img: Read-only file system
```

Settings > Fix Common Problems > click Rescan button

> [!NOTE]
> Unable to write to cache
> 
> Drive mounted read-only or completely full. Begin Investigation Here:   [More Information](https://forums.unraid.net/topic/120220-fix-common-problems-more-information/?tab=comments#comment-1098699)

Possible problems:
* For the array, your drive is most likely completely full.
	* solution: manually move files around between disks using either the Krusader app or Dynamix File Manager (6.10-rc3+ only)
*  may also happen on the cache drive itself (which in turn will affect the docker image) if the file system is corrupted, you have bad memory (run a memtest) etc.

This is a cache drive problem.

solution: 
> For the error happening being caused by anything dealing with the cache drive, it will be best to create a new topic in General Support detailing your problems and always including your [diagnostics](https://wiki.unraid.net/Manual/Troubleshooting#System_Diagnostics).

Tools > Diagnostics > Download the file

