class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :phone_number, :email
end
