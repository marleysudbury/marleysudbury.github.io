#python script by M Sudbury
#does the bubSorts

def bubSort(alist):
	print(alist)
	swapped = True
	while (swapped):
		swapped = False
		for i in range(0, len(alist) - 1):
			if (alist[i] > alist[i+1]):
				temp = alist[i]
				alist[i] = alist[i+1]
				alist[i+1] = temp
				swapped = True
				print(alist)
	return alist
	
alist = [5,3,4,2,1]
bubSort(alist)