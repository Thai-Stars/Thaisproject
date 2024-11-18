def addNumbers(firstNum, secondNum):
    sum = firstNum + secondNum
    print ("The Sum of", firstNum ,"and" , secondNum, "is", sum)

def subtractionNumbers(firstNum,SecondNum):
   sum = firstNum - secondNum
   print("the diffrence ", firstNum ,"and" , secondNum, "is",sum )
def multiplyNumbers(firstNum,SecondNum):
   sum = firstNum * secondNum
   print("the diffrence ", firstNum ,"and" , secondNum ,"is",sum )
def divdeNumbers(firstNum,SecondNum):
   sum = firstNum / secondNum
   print("the diffrence ", firstNum, "and" , secondNum ,"is",sum )

def main():
   allFeatures = ["additon", "subtraction", "multiply","divide"]
   print("here are the applicaiton features")
   print(allFeatures[2])

def displayMenu():
 print("welcome to my calculator")
 print("1. Addtion")
 print("2. subtraction")
 print("3 .multiplcation")
 print("4. divsion")

main()
displayMenu()
