# Insertion Sort by M Sudbury

def insSort(alist):
	print(alist)
	for i in range(1, len(alist)):
		cnt = i
		while (alist[cnt] < alist[cnt - 1] and cnt > 0):
			temp = alist[cnt]
			alist[cnt] = alist[cnt - 1]
			alist[cnt - 1] = temp
			cnt -= 1
		print(alist)
	return alist

alist = [5,3,4,2,1]
insSort(alist)