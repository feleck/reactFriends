class ContactsController < ApplicationController
  def index
    @contacts = Contact.order('last_name ASC')
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      render json: @contact
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    head :no_content
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :email, :phone)
  end
end
