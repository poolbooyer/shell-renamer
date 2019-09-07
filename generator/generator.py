# 偶数判別
def isEven(number):
    if number%2==0:
        return True
    else:
        return False

#ファイル生成
def generator():
    for i in range(100):
        html="<!doctype html>\n<html>\n"
        # head
        head="<head>\n"
        head+=f"<title>sample {i+1}</title>\n"
        head+="</head>\n"
        #body
        body="<body>\n"
        body+=f"<h1>sample{i+1}</h1>\n"
        if isEven(i+1)==True:
            ul="<ul>\n"
            for j in range(3):
                ul+=f"<li>hoge{j+1}</li>\n"
            ul+="</ul>\n"
            body+=ul
        else:
            dl="<dl>\n"
            for j in range(3):
                dl+=f"<dt>sample{j+1}</dt><dd>this is sample data{j+1}</dd>\n"
            dl+="</dl>\n"
            body+=dl
        
        
        body+="</body>\n"
        html+=head+body+"</html>"
        #output
        path="base-data/"
        data=i+1
        data=str(data)
        fname=f'doc{data.zfill(3)}.html'
        with open(path+fname, 'w') as file:
            file.write(html)

generator()