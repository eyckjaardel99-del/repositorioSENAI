#include <stdio.h>

int main(){
	
	FILE *arquivo;
	char nome[50];
	
	printf("diga nome");
	scanf("%s", &nome);
	
	
	arquivo = fopen("nome.txt", "w");
	
	

	fprintf(arquivo, "%s", nome);
	
	fclose(arquivo);
	
	printf("nome do arquivo salvo com suvcesso");
	
	
	
	
	
	return 0;
	
	if (arquivo == NULL){
		
	}
	
}