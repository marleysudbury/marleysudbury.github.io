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

print(linSearch([1,2,3],2))