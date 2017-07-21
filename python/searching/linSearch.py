# Linear Search by M Sudbury
def linSearch(alist, find):
	found = False
	index = 0
	while (found == False  & index < len(alist)):
		if (alist[index] == find):
			found = True
		else:
			index += 1
	if (found == False):
		return -1
	else:
		return index

alist = [1,3,5,7,9,11,13]
print(linSearch(alist, 9))