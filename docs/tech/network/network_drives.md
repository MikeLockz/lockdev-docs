# Network drives

Do not use fstab for mounting network drives on virtual machines because fstab will try to mount the network drives before the vm has fully setup and connected networking and the drive will not be available after full boot.

## Use autofs to mount network drives in virtual linux machines

