class Star < ApplicationRecord
    belongs_to :user
    has_one :word
end
