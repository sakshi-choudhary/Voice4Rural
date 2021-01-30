


def recommending(global_polarity):
    
    if global_polarity > 0:
        print("According to the predictions and twitter sentiment analysis -> Investing in this is a GREAT idea!" )
    elif global_polarity < 0:
        print("According to the predictions and twitter sentiment analysis -> Investing in this is a BAD idea!" )
    else:
        print("According to the predictions and twitter sentiment analysis -> Investing in this might be a GOOD idea!" )