
start=`date '+%s'`
echo ${start}
# Please write command under here.
echo "Please input target files' path"
read path_target

flist=(`ls ./${path_target}`)
echo "./${path_target} have these files (${#flist[*]})"
echo ${flist[@]}
fin=`date '+%s'`
echo ${fin}

echo $((fin - start))