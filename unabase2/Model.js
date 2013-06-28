
guidedModel =// @startlock
{
	Usuario :
	{
		events :
		{
			onValidate:function()
			{// @endlock
				this.isUsuario = true;
			}// @startlock
		}
	},
	Sistema :
	{
		events :
		{
			onValidate:function()
			{// @endlock
				this.isSistema = true;
			}// @startlock
		}
	},
	Empresa :
	{
		events :
		{
			onValidate:function()
			{// @endlock
				this.isEmpresa = true;
			}// @startlock
		}
	},
	EntradaEmpleado :
	{
		events :
		{
			onValidate:function()
			{// @endlock
				this.isEmpleado = true;
			}// @startlock
		}
	},
	Persona :
	{
		events :
		{
			onValidate:function()
			{// @endlock
				this.isPersona = true;
			}// @startlock
		}
	},
	EntradaCliente :
	{
		events :
		{
			onValidate:function()
			{// @endlock
				this.isCliente = true;
			}// @startlock
		}
	},
	EntradaProveedor :
	{
		events :
		{
			onValidate:function()
			{// @endlock
				this.isProveedor = true;
			}// @startlock
		}
	},
	Contacto :
	{
		docIdentidad :
		{
			events :
			{
				onValidate:function(attributeName)
				{// @endlock
					/*switch(attributeName) {
						case "docIdentidad":
							this[attributeName].lpad("\0", 16);
						break;
					}*/
				}// @startlock
			}
		}
	}
};// @endlock
