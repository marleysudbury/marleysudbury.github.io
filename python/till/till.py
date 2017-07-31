# Till System by M Sudbury
import getpass

rPassword = "Jolly"
aPassword = "Jelly"
sName = "TillOS"
sVer = "0.69"

def table():
	for i in range(0, len(data)):
		print("{} - {} - {}".format(data[i][0], data[i][1], data[i][2]))
def checkout():
	view()
	totalPrice = 0
	for i in range(0, len(basket)):
		totalPrice += float(data[lookup(basket[i])][2])
	print("Total price: {}".format(totalPrice))
	cont = input("Continue (Y/N): ")
	if cont == "Y":
		monGiven = float(input("Money given: "))
		if monGiven > totalPrice:
			print("Give change: {0:.2f}".format(monGiven - totalPrice))
			input("Press ENTER when change given")
		print("Transaction complete!")
		initialise()
def lookup(prodID):
	for i in range(0, len(data)):
		if data[i][0] == prodID:
			index = i
	return index
def view():
	for i in range(0, len(basket)):
		name = data[lookup(basket[i])][1]
		price = data[lookup(basket[i])][2]
		print("{} - {} - {}".format(i, name, price))
def remove():
	view()
	toRem = int(input("Remove which?: "))
	if (toRem <= len(basket)):
		basket.pop(toRem)
	else:
		print("Invalid!")
def add(prodID):
	basket.append(prodID)
def isValid(prodID):
	valid = False
	for i in range(0, len(data)):
		if (data[i][0] == prodID):
			valid = True
	return valid
def change(due, paid):
	return paid - due
def wrong():
	print("WRONG!")
	startup()
def regOp():
	pssw = getpass.getpass("Password: ")
	if (pssw != rPassword):
		wrong()
	change = False
	while (change == False):
		operation = input("0 (Add) | 1 (Remove) | 2 (View) | 3 (Checkout) | 4 (Table) | 5 (Admin): ")
		if (operation == "0"):
			prodID = input("Enter prodID: ")
			if (isValid(prodID) == True):
				add(prodID)
		elif (operation == "1"):
			if len(basket) > 0:
				remove()
			else:
				print("None to remove!")
		elif (operation == "2"):
			view()
		elif (operation == "3"):
			checkout()
		elif (operation == "4"):
			table()
		elif (operation == "5"):
			change = True
		else:
			print("Invalid operation!")
	admOp()
def admOp():
	pssw = getpass.getpass("Admin Password: ")
	if (pssw != aPassword):
		wrong()
def initialise():
	file = open("items.txt", "r")
	global data
	global basket
	basket = []
	data = file.read()
	file.close()
	data = data.split("\n")
	data = [data[i:i+3] for i in range(0, len(data), 3)]
def startup():
	initialise()
	print("Welcome to {} v{}!".format(sName, sVer))
	mode = input("0 (Regular) | 1 (Admin): ")
	if (mode == "0"):
		regOp()
	else:
		admOp()

startup()