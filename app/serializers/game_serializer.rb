class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :retailPrice, :cheapestPrice, :deal_id, :wishlist_id
end
