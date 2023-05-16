from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://sparta:test@cluster0.isqkcv6.mongodb.net/?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/post", methods=["POST"])
def info_post():
    img_receive = request.form['img_give']
    name_receive = request.form['name_give']
    mbti_receive = request.form['mbti_give']
    blog_receive = request.form['blog_give']
    advantages_receive = request.form['advantages_give']
    collaboration_receive = request.form['collaboration_give']
    pw_receive = request.form['pw_give']

    doc = {
        'img' : img_receive,
        'name' : name_receive,
        'mbti' : mbti_receive,
        'blog' : blog_receive,
        'advantages' : advantages_receive,
        'collaboration' : collaboration_receive,
        'pw' : pw_receive
    }

    db.remember.insert_one(doc)

    return jsonify({'msg':'게시물 등록완료'})

# @app.route("/reviews/update", methods=["POST"])
# def modify_reviews():
#     name_receive = request.form['name_give']
#     star_receive = request.form['star_give']
#     comment_receive = request.form['comment_give']
#     img_receive = request.form['img_give']
#     pw_receive = request.form['pw_give']
#     id_receive = request.form['_id_give']
    
#     doc = {
#         'name' : name_receive,
#         'star' : star_receive,
#         'comment' : comment_receive,
#         'img' : img_receive,
#         'pw' : pw_receive
#     }
#     print("가나다", id_receive, doc)

#     db.reviews.update_one({"_id": ObjectId(id_receive)}, {"$set" : doc})

#     return jsonify({'msg':'게시글 수정 완료!'})

# from bson.objectid import ObjectId

# @app.route("/reviews", methods=["GET"])
# def reviews_get():
#     all_reviews = list(db.reviews.find({}))
    
#     result = []
#     for review in all_reviews:
#         review['_id'] = str(ObjectId(review['_id'])) # convert the ObjectId to a string
#         # print(review)
#         result.append(review)

#     return jsonify({'result': result})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)