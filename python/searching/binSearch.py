# Binary Search by M Sudbury
def binSearch(alist, find):
	lbound = 0
	ubound = len(alist)
	found = False
	while (found == False and lbound <= ubound):
		midpoint = int((ubound + lbound) / 2)
		if (alist[midpoint] == find):
			found = True
		else:
			if (alist[midpoint] > find):
				ubound = midpoint - 1
			else:
				lbound = midpoint + 1
	if (found == False):
		return -1
	else:
		return midpoint
				
print(binSearch([1,2,3,4], 4))