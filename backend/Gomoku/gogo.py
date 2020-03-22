import random
import numpy as np


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



def get_move(b, mymove):
    '''find empty spot at random and play -1'''
    okmove = False
    (rowsize, colsize)= b.shape

    # is the board full?
    c = b.flatten()
    bset = set(c.tolist())
    if not 0 in bset:
        return b

    X3 = "XXX"
    X4 = "XXXX"
    O4 = "OOOO"
    O3 = "OOO"
    # check columns
    for colidx in range(colsize):
        col = b[:, colidx]
        colstr = convertIntListToString(col)
        if X4 in colstr:
            idx = colstr.find(X4)
            if idx > 0 and (colstr[idx-1] == '.'):
                b[idx-1, colidx]= mymove
                return b
            elif idx < colsize-1 and (colstr[idx+4]=='.'):
                b[idx+4, colidx] = mymove
                return b

        if X3 in colstr:
            idx = colstr.find(X3)
            if idx > 0 and (colstr[idx-1] == '.'):
                b[idx-1, colidx]= mymove
                return b
            elif idx < colsize-1 and (idx+3) < colsize and (colstr[idx+3]=='.'):
                b[idx+3, colidx] = mymove
                return b

        if O4 in colstr:
            idx = colstr.find(O4)
            if idx > 0 and (colstr[idx - 1] == '.'):
                b[idx - 1, colidx] = mymove
                return b
            elif idx < colsize - 1 and (colstr[idx + 4] == '.'):
                b[idx + 4, colidx] = mymove
                return b

        if O3 in colstr:
            idx = colstr.find(O3)
            if idx > 0 and (colstr[idx - 1] == '.'):
                b[idx - 1, colidx] = mymove
                return b
            elif idx < colsize - 1 and (colstr[idx + 3] == '.'):
                b[idx + 3, colidx] = mymove
                return b

    while not okmove:
        row = random.randint(0,rowsize-1)
        col = random.randint(0,colsize-1)
        if b[row,col] == 0:
            b[row,col] = mymove
            okmove = True

    return b


def testme():
    return 2

def main():
    b = np.zeros([5,5], dtype=np.int8)
    print (b.shape)

if __name__ == "__main__":
    main()