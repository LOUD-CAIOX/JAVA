# o /n quebra linha deixa o conteudo na linha debaixo ex 
#linha1/nlinha2 ficaria assim
#linha 1
#linha 2
#verao/ninverno/nprimacera 
# len conta os caracteres da palavra dentro dele 



import tkinter as tk
from tkinter import messagebox

def formatar_numero_cartao(numero):
    numero = numero.replace(" ", "")
    return ' '.join(numero[i:i+4] for i in range(0, len(numero), 4))

def formatar_data_validade(data):
    data = data.replace("/", "")
    if len(data) >= 2:
        return data[:2] + '/' + data[2:4]
    return data

def atualizar_numero(event):
    numero = entry_numero.get().replace(" ", "")[:16]  # Limita a 16 dígitos
    numero_formatado = formatar_numero_cartao(numero)
    entry_numero.delete(0, tk.END)
    entry_numero.insert(0, numero_formatado)
    entry_numero.icursor(tk.END)  # Move o cursor para o final

def atualizar_data(event):
    data = entry_data.get().replace("/", "")[:4]  # Limita a 4 caracteres
    data_formatada = formatar_data_validade(data)
    entry_data.delete(0, tk.END)
    entry_data.insert(0, data_formatada)
    entry_data.icursor(tk.END)  # Move o cursor para o final

def atualizar_cvc(event):
    cvc = entry_cvc.get()[:3]  # Limita a 3 dígitos
    entry_cvc.delete(0, tk.END)
    entry_cvc.insert(0, cvc)
    entry_cvc.icursor(tk.END)  # Move o cursor para o final

def inicial():
    nome = input("Coloque seu nome aqui: ")
    print(f"Olá {nome}, como está?")

    while True:
        situacao = input().lower()

        if situacao in ["bem", "legal", "bom"]:
            print("Que bom então, bora trabalhar!")
            break
        
        elif situacao in ["mais ou menos", "levando a vida", "medio"]:
            print("Entendo, às vezes é assim mesmo. Vamos lá que tudo melhora!")
            break
        
        else:
            print("Poh! Resposta não encontrada. Por favor, como você está?")
    
    exibir_interface_grafica(nome)

def exibir_interface_grafica(nome):
    global root, entry_numero, entry_data, entry_cvc, entry_nome_completo

    def enviar_informacoes():
        nome_completo = entry_nome_completo.get()
        numero_cartao = entry_numero.get().replace(" ", "")
        validade = entry_data.get()
        cvc = entry_cvc.get()

        print("\nInformações do cartão:")
        print(f"Nome Completo: {nome_completo}")
        print(f"Número do cartão: {formatar_numero_cartao(numero_cartao)}")
        print(f"Validade: {validade}")
        print(f"CVC: {cvc}")

        root.quit()

    root = tk.Tk()
    root.title("Formulário do Cartão")

    tk.Label(root, text=f"Olá, {nome}! Por favor, preencha as informações do cartão:").pack(pady=10)

    tk.Label(root, text="Nome Completo (matheus de...):").pack()
    entry_nome_completo = tk.Entry(root)
    entry_nome_completo.pack()

    tk.Label(root, text="Número do cartão ex(1111 2222 3333 4444 ):").pack()
    entry_numero = tk.Entry(root)
    entry_numero.pack()
    entry_numero.bind("<KeyRelease>", atualizar_numero)

    tk.Label(root, text="Data de validade (11/22):").pack()
    entry_data = tk.Entry(root)
    entry_data.pack()
    entry_data.bind("<KeyRelease>", atualizar_data)

    tk.Label(root, text="Código de segurança (CVC - 3 dígitos):").pack()
    entry_cvc = tk.Entry(root)
    entry_cvc.pack()
    entry_cvc.bind("<KeyRelease>", atualizar_cvc)

    tk.Button(root, text="Enviar", command=enviar_informacoes).pack(pady=10)

    root.mainloop()

inicial()