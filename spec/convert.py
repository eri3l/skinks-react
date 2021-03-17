import pandas as pd
import folium
import json
import numpy as np

df = pd.read_csv("./skinks/skinks_clean02.csv")

df.fillna('', inplace=True)

#print(df.dtypes)
#print(df.columns)

d = {}

d['records'] = df.to_dict('records')

cover = df.Cover.unique()
cover.sort()
d['cover'] = cover.tolist()

site = df.Site.unique()
site.sort()
d['site'] = site.tolist()


d['svl'] = {}
d['svl']['min'] = df.SVL.min()
d['svl']['max'] = df.SVL.max()
d['vtl'] = {}
d['vtl']['min'] = df.VTL.min()
d['vtl']['max'] = df.VTL.max()
d['weight'] = {}
d['weight']['min'] = df.Weight.min()
d['weight']['max'] = df.Weight.max()
d['regen'] = {}
d['regen']['min'] = df.Regen.min()
d['regen']['max'] = df.Regen.max()


# print(d)
with open('./skinks/data.json', 'w') as file:
    json.dump(d, file, indent=4)
