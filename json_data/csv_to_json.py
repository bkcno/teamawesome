import pandas as pd
import json

df1 = pd.read_csv('crime_all.csv')
json_data1 = df1.to_json("crime.json", orient="records")

df2 = pd.read_csv('population_all.csv')
json_data2 = df2.to_json("population.json", orient="records")

df3 = pd.read_csv('spending_all.csv')
json_data3 = df3.to_json("spending.json", orient="records")
