# minimax1 - for 7320 A2
import minimaxUtils as util
import time
import sys
import random
# TODO: Modify isEndNode(self) and  evaluate(self):
counter_number_of_nodes_visited = 0
# a utility function to convert an board array into a game string
# of the form  X.O|X..|..O      useful for debugging
def getNameForBoard(b):
    charVal = '.XO'
    nameStr = ""
    for idx, val in enumerate(b):
        nameStr= nameStr + charVal[val]
        if idx == 2 or idx == 5:
            nameStr = nameStr + '|'
    nameStr = nameStr + '|'
    return nameStr


# Node for minimax tree
class node():
    def __init__(self, board):
        self.board = board  # the list of 1,-1 and 0s
        self.children = []
        self.score = None
        self.bestMove = None   # for later use
        self.name = getNameForBoard(board)   # string picture of the board

    def isEndNode(self):
        if util.get_winner(self.board) == 1 or util.get_winner(self.board) == -1 :
            return True
        if 0 not in self.board:
            return True
        # modify this code
        # True of win or tie

    def evaluate(self):
        # modify this code
        # we only call if an end node
        # return either 1, -1, or 0
        if util.get_winner(self.board) == None:
            return 0
        return util.get_winner(self.board)

    def getChildren(self):
        # use your utility function to get next boards
        # and then create nodes from the board array
        childBoards = util.gen_next_moves_list(self.board)
        for b in childBoards:
            self.children.append(node(b) )
        return self.children

def alphaBeta(node, alpha, beta, maximizingScore):
    global counter_number_of_nodes_visited
    counter_number_of_nodes_visited = counter_number_of_nodes_visited + 1
    if node.isEndNode():
        # expect 0, 1 or -1
        value = node.evaluate()
        node.score = value
        return value

    if maximizingScore:
        bestScore = -999
    else:
        bestScore = 999

    for child in node.getChildren():
        score = alphaBeta(child, alpha, beta, not maximizingScore)
        if maximizingScore:
            bestScore = max(score, bestScore)
            alpha = max(alpha, bestScore)
        else:
            bestScore = min(score, bestScore)
            beta = min(beta, bestScore)

        # time to prune?
        if beta <= alpha:
            break  # stop evaluating

    # store score in node
    node.score = bestScore
    return bestScore

if __name__ == "__main__":
    print('---------------- Part C ---------------- ')
    counter_number_of_nodes_visited = 0
    # b = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    # Parsing
    b = sys.argv[1]
    b = b.split(',')
    b = [int(i) for i in b]

    root = node(b)
    start = time.time()
    # top level call to alphaBeta
    alphaBeta(root, -999, 999, True)

    f = open("movesMade.txt", "w")
    board_list = util.gen_next_moves_list(b)
    if len(board_list) == 0:
        pass
    randomNum = random.randint(0, len(board_list) - 1)
    f.write(','.join([str(elem) for elem in board_list[randomNum]]))
    f.close()

    # end = time.time()
    # duration = end - start
    # print("Nodes visited: ", counter_number_of_nodes_visited)
    # print("root node value = ", root.score) # expect 0
    # print("Time for alphaBeta: {} seconds".format(duration))
