first_name = "Thai"  # This is a string
print(first_name)

last_name = "Dupervil"  # This is a string
nick_name = "Thailand"  # This is a string

age = 17
user_input = input("What is your account balance: ")  # This is a string
bank_account_balance = int(user_input)  # Convert to integer
bank_loans = bank_account_balance
bank_interest = 10  # Interest rate as a percentage

if bank_account_balance > 100:
    print(bank_account_balance, "YOURE STACKED ZOO WEE MAMA")
elif bank_account_balance < 100: 
    print("You're a brokie")

while bank_account_balance < 100:
    print("Make more moola")
    break  # Exit the loop after one iteration

def money_maker(bank_loans, bank_interest):
    interest_due = bank_loans * (bank_interest / 100)  # Calculate interest
    print(f"You're going to owe {interest_due} due to interest.")

# Call the function
money_maker(bank_loans, bank_interest)

moneyGoals = ['1000','10000','100000']
moneyGoals.append(bank_interest)
print(moneyGoals)
