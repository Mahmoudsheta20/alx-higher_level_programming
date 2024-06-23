#!/usr/bin/python3
"""Lists states"""

import MySQLdb
from sys import argv

if __name__ == "__main__":
    conn = MySQLdb.connect(host="localhost", port=3306, user=argv[1],
                           passwd=argv[2], db=argv[3], charset="utf8")
    cur = conn.cursor()
<<<<<<< HEAD
      cur.execute("""
SELECT * FROM states WHERE name LIKE BINARY '{}' ORDER BY states.id ASC""".format(argv[4]))
=======
    query = """
SELECT * FROM states WHERE name LIKE BINARY '{}' ORDER BY states.id ASC"""
    query = query.format(argv[4])
    cur.execute(query)
>>>>>>> 85030ab59713ed29486126836076a82b9e995cd6
    query_rows = cur.fetchall()
    for row in query_rows:
        print(row)
    cur.close()
<<<<<<< HEAD
    conn.close()
    
=======
    conn.close()
>>>>>>> 85030ab59713ed29486126836076a82b9e995cd6
