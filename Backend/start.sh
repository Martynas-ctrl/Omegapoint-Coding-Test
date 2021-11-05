echo 'Make sure python is downloaded and added to path then run: "pip install -r requirements.txt" to install requirements'
sleep 1
./ngrok authtoken 20RyBmgUOYoo8ZEAABNGmJC9Eks_69duATTeWEr55rtVFmLtS
python app.py &
sleep 1
./ngrok http 5000