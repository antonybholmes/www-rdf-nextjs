for f in `find . | grep -P "(jpg|png)"`
do
	nf=`echo ${f} | sed -r 's/\..{3}$/.webp/'`
	echo ${f} ${nf}
	convert ${f} ${nf}
done
