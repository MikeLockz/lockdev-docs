# Network drives

Do not use fstab for mounting network drives on virtual machines because fstab will try to mount the network drives before the vm has fully setup and connected networking and the drive will not be available after full boot.

## Use autofs to mount network drives in virtual linux machines


`nano /etc/auto.master`

```
/mnt /etc/auto.smb.shares --timeout 15 browse
```

`nano /etc/auto.smb.shares`

```
media -fstype=cifs,rw,credentials=/root/.smbcredentials,iocharset=utf8,uid=0,gid=0 ://192.168.1.1
```

`nano /root/.smbcredentials`

```
username=
password=
```