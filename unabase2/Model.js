
guidedModel =// @startlock
{
	Usuario :
	{
		events :
		{
			onInit:function()
			{// @endlock
				this.isPersona = true;
				this.isUsuario = true;
			}// @startlock
		}
	},
	Empresa :
	{
		events :
		{
			onInit:function()
			{// @endlock
				this.isEmpresa = true;
			}// @startlock
		}
	},
	Persona :
	{
		events :
		{
			onInit:function()
			{// @endlock
				this.isPersona = true;
			}// @startlock
		}
	},
	EntradaEmpleado :
	{
		events :
		{
			onInit:function()
			{// @endlock
				this.isEmpleado = true;
				this.isPersona = true;
			}// @startlock
		}
	},
	EntradaProveedor :
	{
		events :
		{
			onInit:function()
			{// @endlock
				this.isProveedor = true;
			}// @startlock
		}
	},
	EntradaCliente :
	{
		events :
		{
			onInit:function()
			{// @endlock
				this.isCliente = true;
			}// @startlock
		}
	},
	Sistema :
	{
		events :
		{
			onRemove:function()
			{// @endlock
				this.isSistema = false;
				return ds.Sistema.all();
			},// @startlock
			onInit:function()
			{// @endlock
				this.isEmpresa = true;
				this.isSistema = true;
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
