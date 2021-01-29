

import pandas as pd
import numpy as np
from numpy import array
import datetime as dt
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.layers import LSTM,Conv1D,Bidirectional

from tensorflow.keras.models import load_model

from sklearn.preprocessing import MinMaxScaler

train_path='datasets/farm_train.csv'

df=pd.read_csv(train_path)
df.info()
df.corrwith()

train_path='datasets/farm_train.csv'
def get_train_data():
    scaler=MinMaxScaler()
    data = pd.read_csv(train_path,usecols = ['Avg Month Temp'])
    df=data.values
    df_s=df
    X=df_s
    data = pd.read_csv(train_path,usecols = ['Ratio'])
    df=data.values
    df_ys=df
    y=df_ys
    X = np.reshape(X, (X.shape[0], 1, X.shape[1]))
    y = np.reshape(y, (y.shape[0]))
    return X, y


X,y=get_train_data()
print(X,y)


model = Sequential()
#model.add(Conv1D(25,3,1,input_shape=(1,1)))
model.add(LSTM(60, input_shape=(1,1)))
model.add(LSTM(25, input_shape=(1,1)))
model.add(Dense(10, activation='linear'))
model.add(Dense(1, activation='relu'))
model.compile(loss='mse', optimizer='adam')

X,y = get_train_data()
model.fit(X, y, epochs=50, shuffle=False, verbose=1)


model.save('rice_ratio_lstm_model.h5')

def predict_ratio():
    model = load_model('rice_ratio_lstm_model.h5')

    temp=float(input("Enter the average temperature of your area to predict the ratio :"))  

    area=int(input("Enter the value of area used for farming in sq.mtrs :"))
    
    X=np.array([[[temp]]],np.float32)
    pred = model.predict(X, verbose=0)
    print("Predicted Ratio For Land to Crop Output is :")
    print(pred[0])
    pred_final=pred[0]
    ratio=pred_final[0]
    print("The Possible production yield of crop is :",area*ratio)
    ratio_value=pred_final[0]
    prod_value=area*ratio

    return ratio_value,prod_value
