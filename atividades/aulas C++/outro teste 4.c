#include <stdio.h>

int main(){
	
	FILE *CIDADE;
	char nome[50];
	
	printf("diga o nome de uma cidade; ");
	scanf("%s", &nome );
	
	CIDADE = fopen("cidade.txt", "w");
	
	fprintf(CIDADE, "%s", nome);
	
	fclose(CIDADE);
	
	printf("SUCESSO");
	
	
	return 0;
}