file_name = {
    'C': 'main.c',
    'C++': 'main.cpp',
    'Python': 'main.py',
    'Java': 'Main.java',
}

compile_command = {
    'C': '/usr/bin/gcc main.c -o Main -O2 -lm -static -std=gnu99',
    'C++': '/usr/bin/g++ main.cpp -o Main -O2 -lm -static -std=gnu++17',
    'Python': "python3 -c \"import py_compile; py_compile.compile(r'main.py')\"",
    'Java': '/usr/bin/javac --release 15 -J-Xms512m -J-Xmx1024m -J-Xss512m -encoding UTF-8 Main.java',
}

execute_command = {
    'C': './Main',
    'C++': './Main',
    'Python': 'python3 main.py',
    'Java': '/usr/bin/java -Xms512m -Xmx512m -Xss512m -XX:MaxRAM=512m -Djava.security.manager -Dfile.encoding=UTF-8 -XX:+UseSerialGC Main',
}