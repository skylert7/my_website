import os
import numpy as np
import logging
import time

'''v2.0 - fixes testing for full board before testing for win
   v2.1: a. game loop uses playerX and playerO mapped from import stmnts
         b. win or tie tested after each move
   v2.2: a. adds logging: outputs board as .XO - can be used to rerun game
            console gets only info - start stop times
            file gets each move (debug) plus info msgs
'''

# Add your module ( .py file) to this directory
# as playerX (plays X with 1) or playerO (plays O as -1)
import Skyler_AI  as playerX
import gogo  as playerO

# define global vars  - change to create different game configurations
global XWIN, OWIN, BOARD_SIZE, LOG_GAME_NAME
XWIN = "XXXXX"
OWIN = "OOOOO"
BOARD_SIZE = 19
LOG_GAME_NAME = "rollo.v.Skyler"   # used in logging


####  UTILITY FNS  -logging & drawing board  ---------####
def get_logger(cls, logger_name):
    # create logger for prd_ci
    log = logging.getLogger(logger_name)
    log.setLevel(logging.DEBUG)

    # create formatter and add it to the handlers
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

    # set up file for loggin - remove existing log file
    if os.path.exists("GAME.log"):
        os.remove("GAME.log")
    fh = logging.FileHandler('GAME.log')
    fh.setLevel(logging.DEBUG)
    fh.setFormatter(formatter)
    log.addHandler(fh)

    return log


def getBoardAsString(b):
    (rowsize, colsize) = b.shape

    charVal = '.XO'
    nameStr = ""
    for idx in range(rowsize):
        row = b[idx]
        for val in row:
            nameStr = nameStr + charVal[val]
        nameStr = nameStr + '|'

    return nameStr


def printBoard(b):
    nameStr = getBoardAsString(b)
    # sub newline for |
    print(nameStr.replace('|', '|\n'))


def convertIntListToString(mylist):
    str1 = ''
    for myint in mylist:
        if myint == 1:
            str1 = str1 + 'X'
        elif myint == -1:
            str1 = str1 + 'O'
        else:
            str1 = str1 + '.'
    return str1


# UTILITY FNs - checks for a win in all cols, rows and diagonals
def testForWinInString(s):
    '''called by get_winner ()'''
    global XWIN, OWIN
    if XWIN in s:
        return 1
    elif OWIN in s:
        return -1
    else:
        return 0


def get_winner(b):
    global XWIN, OWIN

    winsize = len(XWIN)
    (rowsize, colsize) = b.shape

    # check all rows  - extract using numpy slice
    for rowidx in range(rowsize):
        row = b[rowidx]
        rowstr = convertIntListToString(row)
        if XWIN in rowstr:
            print("X win in row:%d %s " % (rowidx, rowstr))
            return 1
        elif OWIN in rowstr:
            print("O win in row:%d %s " % (rowidx, rowstr))
            return -1

    # check columns
    for colidx in range(colsize):
        col = b[:, colidx]
        colstr = convertIntListToString(col)
        if XWIN in colstr:
            print("X win in col:%d %s " % (colidx, colstr))
            return 1
        elif OWIN in colstr:
            print("O win in col:%d %s " % (colidx, colstr))
            return -1

    # DIAGONALS
    # check LR diagonals  b=board
    for kval in range(rowsize - winsize + 1):
        # search diagonal and above diagonals
        diagstr = convertIntListToString(np.diag(b, k=kval))
        # winner will be 1, -1 or 0 (false)
        winner = testForWinInString(diagstr)
        if winner:
            winchar = 'X' if winner == 1 else 'O'
            dir = 'above'
            print("%s win in LR diagonal k=%d %s main: %s" % (winchar, kval, dir, diagstr))
            return winner

        # search LR diagonal and below diagonal
        diagstr = convertIntListToString(np.diag(b, k=-kval))
        # winner will be 1, -1 or 0 (false)
        winner = testForWinInString(diagstr)
        if winner:
            winchar = 'X' if winner == 1 else 'O'
            dir = 'below'
            print("%s win in LR diagonal k=%d %s main: %s" % (winchar, kval, dir, diagstr))
            return winner

    # check RL diagonals  c=board
    c = np.fliplr(b)
    for kval in range(rowsize - winsize + 1):
        # search diagonal and above diagonals
        diagstr = convertIntListToString(np.diag(c, k=kval))
        # winner will be 1, -1 or 0 (false)
        winner = testForWinInString(diagstr)
        if winner:
            winchar = 'X' if winner == 1 else 'O'
            dir = 'below'
            print("%s win in RL diagonal k=%d %s main: %s" % (winchar, kval, dir, diagstr))
            return winner

        # search LR diagonal and below diagonal
        diagstr = convertIntListToString(np.diag(c, k=-kval))
        # winner will be 1, -1 or 0 (false)
        winner = testForWinInString(diagstr)
        if winner:
            winchar = 'X' if winner == 1 else 'O'
            dir = 'below'
            print("%s win in RL diagonal k=%d %s main: %s" % (winchar, kval, dir, diagstr))
            return winner

    # no win found

    # is the board full? tie game?
    c = b.flatten()
    bset = set(c.tolist())
    if not 0 in bset:
        return 0

    # no win or tie
    return None


# GAME LOOP ---------------
def play_game():
    global BOARD_SIZE
    max_moves = BOARD_SIZE * BOARD_SIZE

    # set up logger for logging to file
    logger = get_logger(0, LOG_GAME_NAME)
    logger.info("Game Board Size: %d" % BOARD_SIZE)

    # set up start board
    b = np.zeros([BOARD_SIZE, BOARD_SIZE], dtype=np.int8)


    # track number of moves
    move_count = 0

    # get timing info
    start_time = time.time()

    # GAME LOOP
    # get_winner returns 1, -1, 0 or None (if still more moves possible)
    while (get_winner(b) == None):
        if (move_count > 0 and move_count % 10 == 0):
            print("moves: %d" % (move_count,))

        # NOTE: player modules imported as playerX and O
        b = playerX.get_move(b, 1)
        logger.debug(getBoardAsString(b))
        move_count += 1

        # only get next move if not a win or tie
        winner = get_winner(b)
        if winner == None:
            b = playerO.get_move(b, -1)
            logger.debug(getBoardAsString(b))
            move_count += 1

        # prevent from rushing off into infinite moves
        # max_moves based on board size
        if (move_count > max_moves):
            print("Too many moves - number moves:", move_count)
            break

    # game over  - show results
    end_time = time.time()
    total_time = end_time - start_time

    printBoard(b)

    winner = get_winner(b)
    print("Winner = %d in %d moves  time= %.3f secs" % (winner,move_count,total_time))
    logger.info("Winner: %d in %d moves time= %.3f secs" % (winner,move_count, total_time))

if __name__ == '__main__':
    play_game()



