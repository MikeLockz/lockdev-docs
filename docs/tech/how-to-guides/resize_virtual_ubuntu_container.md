# Resize virtual ubuntu container

## Confirm virtual machine settings

Double check that the virtual machine has more disk than what appears in the VM

`parted`

```bash
❯ parted
GNU Parted 3.3
Using /dev/sda

Number  Start   End     Size    File system  Name  Flags
        17.4kB  1049kB  1031kB  Free Space
 1      1049kB  2097kB  1049kB                     bios_grub
 2      2097kB  1613MB  1611MB  ext4
 3      1613MB  34.4GB  32.7GB
        34.4GB  66.6GB  32.2GB  Free Space

(parted) q                                                                
❯ du -sh /
du: cannot access '/proc/554450/task/554450/fd/4': No such file or directory
du: cannot access '/proc/554450/task/554450/fdinfo/4': No such file or directory
du: cannot access '/proc/554450/fd/3': No such file or directory
du: cannot access '/proc/554450/fdinfo/3': No such file or directory
831G    /
❯ parted
GNU Parted 3.3
Using /dev/sda
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) print                                                            
Model: QEMU QEMU HARDDISK (scsi)
Disk /dev/sda: 66.6GB
Sector size (logical/physical): 512B/512B
Partition Table: gpt
Disk Flags: 

Number  Start   End     Size    File system  Name  Flags
 1      1049kB  2097kB  1049kB                     bios_grub
 2      2097kB  1613MB  1611MB  ext4
 3      1613MB  34.4GB  32.7GB

(parted) resizepart                                                       
Partition number? 3                                                       
End?  [34.4GB]? 100%                                                      
(parted)                                                                  
(parted) print                                                            
Model: QEMU QEMU HARDDISK (scsi)
Disk /dev/sda: 66.6GB
Sector size (logical/physical): 512B/512B
Partition Table: gpt
Disk Flags: 

Number  Start   End     Size    File system  Name  Flags
 1      1049kB  2097kB  1049kB                     bios_grub
 2      2097kB  1613MB  1611MB  ext4
 3      1613MB  66.6GB  65.0GB

(parted) q                                                                
Information: You may need to update /etc/fstab.
```


```bash
❯ pvresize /dev/sda3
❯ df -h /
Filesystem                         Size  Used Avail Use% Mounted on
/dev/mapper/ubuntu--vg-ubuntu--lv   30G   29G  105M 100% /
❯ lvextend -r -l +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv

❯ df -h /
Filesystem                         Size  Used Avail Use% Mounted on
/dev/mapper/ubuntu--vg-ubuntu--lv   60G   29G   29G  50% /
```