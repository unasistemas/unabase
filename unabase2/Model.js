
guidedModel =// @startlock
{
	Contacto :
	{
		docIdentidad :
		{
			events :
			{
				onValidate:function(attributeName)
				{// @endlock
					switch(attributeName) {
						case "docIdentidad":
							this[attributeName].lpad("\0", 16);
						break;
					}
				}// @startlock
			}
		}
	}
};// @endlock
