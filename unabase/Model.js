
guidedModel =// @startlock
{
	Contacto :
	{
		nombreCompleto :
		{
			onGet:function()
			{// @endlock
				return (Contacto.nombres + " " + Contacto.apPat + " " + Contacto.apMat).trim();
			}// @startlock
		}
	}
};// @endlock
