# Board example = [-1,0,1, 1,1,-1, -1,0,0]
import copy
def next_turn(b):
    # If no elements in board is 0 (meaning no empty space)
    if 0 not in b:
        return None

    # If there exists at least one empty space in board
    if sum(b) == 0:
        return 1 # Player X's turn

    if sum(b) == -1:
        return 1 # Player X's turn

    if sum(b) == 1:
        return -1 # Player O's turn
    '''

    :param b:
    :return: 1 for player X
            -1 for player O
            or None if no more moves
    '''

def get_winner(b):
    '''
    :param b:
    :return: 1 or -1 or None :if no winner
    '''

    # ------------------- X -------------------
    #Horizontal
    if b[0] == b[1] == b[2] == -1:
        return b[0]
    if b[3] == b[4] == b[5] == -1:
        return b[3]
    if b[6] == b[7] == b[8] == -1:
        return b[6]

    #Diagonal
    if b[0] == b[0 + 4] == b[0 + 8] == -1:
        return b[0]
    if b[2] == b[2 + 2] == b[2 + 4] == -1:
        return b[2]

    #Vertical
    if b[0] == b[0 + 3] == b[0 + 6] == -1:
        return b[0]
    if b[1] == b[1 + 3] == b[1 + 6] == -1:
        return b[1]
    if b[2] == b[2 + 3] == b[2 + 6] == -1:
        return b[2]

    # ------------------- O -------------------
    #Horizontal
    if b[0] == b[1] == b[2] == 1:
        return b[0]
    if b[3] == b[4] == b[5] == 1:
        return b[3]
    if b[6] == b[7] == b[8] == 1:
        return b[6]

    #Diagonal
    if b[0] == b[0 + 4] == b[0 + 8] == 1:
        return b[0]
    if b[2] == b[2 + 2] == b[2 + 4] == 1:
        return b[2]

    #Vertical
    if b[0] == b[0 + 3] == b[0 + 6] == 1:
        return b[0]
    if b[1] == b[1 + 3] == b[1 + 6] == 1:
        return b[1]
    if b[2] == b[2 + 3] == b[2 + 6] == 1:
        return b[2]

    # ------------------- Tie -------------------
    if 0 not in b:
        return None

    return None

def is_legal_board(b):
    '''
    :param b:
    :return: True if a legal board otherwise return False
    legal board has 9 entries and only 0, 1, -1
    where sum of all values is either 0, -1 or 1
    '''

    # Check number of entry
    if len(b) != 9:
        return False

    # Check value of each entry
    for index in b:
        if index not in [0, 1, -1]:
            return False

    # Check sum
    if sum(b) not in [0, 1, -1]:
        return False

    # Returns True if all tests passed
    return True

def is_game_over(b):
    '''
    There is a winner OR a Tie
    '''

    #Either X or O is winner
    if get_winner(b) == 1 or get_winner(b) == -1:
        return True

    #------- This is a TIE -------
    if 0 not in b:
        return True

    return False

def gen_next_moves_list(b):
    '''

    :param b:
    :return: a list of lists of boards for some board

    '''
    next_moves_list = []

    #If there is a next turn for Player O => generating boards for Player O
    if next_turn(b) == -1:
        for index in range(len(b)):
            if b[index] == 0:
                deep_copy_of_b = copy.deepcopy(b)
                deep_copy_of_b[index] = -1
                next_moves_list.append(deep_copy_of_b)

    #If there is a next turn for Player X => generating boards for Player X
    if next_turn(b) == 1:
        for index in range(len(b)):
            if b[index] == 0:
                deep_copy_of_b = copy.deepcopy(b)
                deep_copy_of_b[index] = 1
                next_moves_list.append(deep_copy_of_b)

    return next_moves_list