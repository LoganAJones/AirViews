# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


post_info = [
  {description: 'The drive through Patratu Valley is a brilliant one with hairpin bends. View from the top of the hill is great with dense forests surrounding Patratu Dam. One of the most picturesque sites in Jharkhand.', user_id: 1, remote_post_art_url:"https://i.ytimg.com/vi/D3jyV5eYODI/maxresdefault.jpg" },
  {description: 'The drive through Patratu Valley is a brilliant one with hairpin bends. View from the top of the hill is great with dense forests surrounding Patratu Dam. One of the most picturesque sites in Jharkhand.', user_id: 1, remote_post_art_url:"https://i.ytimg.com/vi/O2N-MDh5yFk/maxresdefault.jpg" },
  {description: 'The drive through Patratu Valley is a brilliant one with hairpin bends. View from the top of the hill is great with dense forests surrounding Patratu Dam. One of the most picturesque sites in Jharkhand.', user_id: 1, remote_post_art_url:"https://i.redd.it/ks3bvmcxdmxy.jpg" },
  {description: 'The drive through Patratu Valley is a brilliant one with hairpin bends. View from the top of the hill is great with dense forests surrounding Patratu Dam. One of the most picturesque sites in Jharkhand.', user_id: 1, remote_post_art_url:"https://iso.500px.com/wp-content/uploads/2015/11/Night-shot.jpg" }
  {description: 'The drive through Patratu Valley is a brilliant one with hairpin bends. View from the top of the hill is great with dense forests surrounding Patratu Dam. One of the most picturesque sites in Jharkhand.', user_id: 1, remote_post_art_url:"https://iso.500px.com/wp-content/uploads/2015/11/Night-shot.jpg" }

]

post_info.each do |post|
  Post.create(post)
end
