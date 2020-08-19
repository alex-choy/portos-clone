# == Schema Information
#
# Table name: users
#
#  id               :bigint           not null, primary key
#  username         :string           not null
#  password_digest  :string           not null
#  session_token    :string           not null
#  shopping_cart_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class User < ApplicationRecord
  validates :username, :session_token, :shopping_cart_id, {
    presence: true, uniqueness: true
  }
  validates :password_digest, presence: true

  validates :password, length: { minimum: 6, allow_nil: true}
  
  attr_reader :password
  after_initialize :ensure_session_token, :set_shopping_cart_id


  def self.find_by_credentials(un, pw)
    user = User.find_by(username: un)
    (user && user.is_password?(pw)) ? user : nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def set_shopping_cart_id
    self.shopping_cart_id = SecureRandom.random_number(1000000)
  end

end
