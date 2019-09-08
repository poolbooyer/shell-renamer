echo "Please input target files' path"
read path_target

start=`date '+%s'`

# Please write command under here.

flist=(`ls ./${path_target}`)
echo "./${path_target} have these files (${#flist[*]})"
dir="copy"

if [ -d ${dir} ]; then
  echo "folder is created"
else
  mkdir ${dir}
fi
for item in ${flist[@]}; do
    CP ./${path_target}/${item} ./${dir}/${item:3:3}doc.html >/dev/null 2>&1

    if [ $?=0 ]; then
      echo "${item} is success"
    else
      echo "${item} is error"
    fi

done

fin=`date '+%s'`
echo ${start}
echo ${fin}

echo $((fin - start))