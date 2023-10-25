import random

def find_matching_list(target_list):
    while True:
        random_list = [random.randint(0, 9) for _ in range(len(target_list))]
        if random_list == target_list:
            return random_list

target = [9,9,9,9,9,9,9,9,9]
matching_list = find_matching_list(target)
print("Lista coincidente encontrada:")
print(matching_list)