def log(message):
    with open('/log/py.log', 'a') as f:
        f.write("{}\n".format(str(message)))