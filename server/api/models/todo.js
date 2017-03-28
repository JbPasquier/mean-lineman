import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    }
});

let model = mongoose.model('Todo', todoSchema);

export default class Todo {

    findAll(req, res) {
        model.find({}, (err, todos) => {
            if (err || !todos) {
                res.sendStatus(403);
            } else {
                res.json(todos);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, todo) => {
            if (err || !todo) {
                res.sendStatus(403);
            } else {
                res.json(todo);
            }
        });
    }

    create(req, res) {
        model.create(req.body,
            (err, todo) => {
                if (err || !todo) {
                    res.status(500).send(err.message);
                } else {
                    res.json(todo);
                }
            });
    }

    update(req, res) {
        model.findByIdAndUpdate(req.params.id, req.body, (err, todo) => {
            if (err || !todo) {
                res.status(500).send(err.message);
            } else {
                res.json(todo);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        });
    }
}
