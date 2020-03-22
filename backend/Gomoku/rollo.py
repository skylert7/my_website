import random


def get_move(b, mymove):
    '''find empty spot at random and play -1'''
    okmove = False
    (mrow, mcol) = b.shape

    # is the board full?
    c = b.flatten()
    bset = set(c.tolist())
    if not 0 in bset:
        return b

    while not okmove:
        row = random.randint(0, mrow-1)
        col = random.randint(0, mcol-1)
        if b[row, col] == 0:
            b[row, col] = mymove
            okmove = True

    return b


def testme(b, val):
    return val
