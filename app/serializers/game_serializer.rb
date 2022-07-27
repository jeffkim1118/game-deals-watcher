class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :gameID, :retailPrice, :cheapestPrice, :thumb, :user, :memos
end
