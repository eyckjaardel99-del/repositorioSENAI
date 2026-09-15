#include <stdio.h>

int main(){
	
	FILE *arquivo;
	
	char texto[100];
	
	arquivo = fopen("dados.txt", "r");
	
	fgets(texto, 100, arquivo); 
	//para ler uma linha
	
	printf("%s", texto);
	
	fclose(arquivo);

	
	return 0;
}