const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  owner: String,
  repo_name: String,
  forks_count: Number,
  url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoArray, callback) => {
  repoArray.forEach((repo) => {
    var repo = new Repo(repo);
    repo.save();
  });

  if (callback) callback();
}

module.exports.save = save;