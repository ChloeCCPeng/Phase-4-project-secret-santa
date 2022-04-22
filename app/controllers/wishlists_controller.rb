class WishlistsController < ApplicationController
    
    #PATCH 
    def update 
        wishlist = Wishlist.find(params[:id])
        wishlist.update!(wishlist_params)
        render json: wishlist, status: :created
    end
    
    
    
    #DELETE wishlist
    def destroy
        wishlist = Wishlist.find(params[:id])
        wishlist.destroy
        head :no_content
    end


    private 

    def wishlist_params
        params.permit(:wish1, :wish2, :wish3, :wish4, :wish5)
    end
end
