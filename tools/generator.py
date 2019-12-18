#%%
import pandas as pd
import json

#%%
d = pd.read_csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1nw06N-h6IMBYkfPNLwtxpHMOOJ_GOX5GpAyjowedfN5DIPUYfszCuTdgRAQCOohrDhQc3uja8d99/pub?gid=0&single=true&output=csv')

#%%
d.jmeno_souboru_fotka.fillna('face.jpg', inplace=True)
d.fillna('', inplace=True)

#%%
d.columns

#%%
d.rename(columns={
    'jmeno': 'j',
    'prijmeni': 'p',
    'funkce': 'fc',
    'kauza1': 'k1',
    'duvod1': 'd1',
    'kauza2': 'k2',
    'duvod2': 'd2',
    'kauza3': 'k3',
    'duvod3': 'd3',
    'jmeno_souboru_fotka': 'f'
}, inplace=True)
#%%


#%%
with open('./data/data.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(list(d.to_dict(orient='index').values()),  ensure_ascii=False))

